import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CoinTable from "../Components/CoinTable";
import axios from "axios";

jest.mock("../Components/News", () => () => <div>Mocked News</div>);

const mockHistoryPush = jest.fn();

jest.mock("../CryptoContext", () => ({
  CryptoState: () => ({
    currency: "INR",
    symbol: "₹",
    coins: [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "btc",
        current_price: 50000,
        market_cap: 900000000,
        price_change_percentage_24h: 2.5,
        image: "btc.png",
      },
    ],
    loading: false,
  }),
}));


jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


const getInputByLabel = (label) => {
  const matches = screen.getAllByText(label);
  const labelElement = matches.find((el) => el.tagName === "LABEL");
  if (!labelElement) throw new Error(`Label not found: ${label}`);

  return labelElement.closest(".MuiFormControl-root").querySelector("input");
};

describe("CoinTable Component Tests", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "btc",
          current_price: 50000,
          price_change_percentage_24h: 2.5,
          image: "btc.png",
        },
      ],
    });
  });

  test("renders title and search input", () => {
    render(<CoinTable />);

    expect(
      screen.getByText("Cryptocurrency Prices by Market Cap")
    ).toBeInTheDocument();

    expect(
      getInputByLabel("Search For a Crypto Currency...")
    ).toBeInTheDocument();
  });

  test("filters results on search input", () => {
    render(<CoinTable />);

    const input = getInputByLabel("Search For a Crypto Currency...");
    fireEvent.change(input, { target: { value: "BTC" } });

    expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
  });

  test("navigates when clicking a coin row", () => {
    render(<CoinTable />);

    const row = screen.getByText(/Bitcoin/i).closest("tr");
    fireEvent.click(row);

   expect(mockHistoryPush).toHaveBeenCalled();

  });
});
