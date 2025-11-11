import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import News from "../Components/News";
import axios from "axios";


jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("News component", () => {
  const mockData = {
    Data: [
      {
        id: 1,
        title: "Crypto News 1",
        body: "This is a short summary of crypto news 1.",
        imageurl: "https://example.com/img1.png",
        url: "https://example.com/news1",
      },
    ],
  };

  test("shows loader initially and then loads news", async () => {
    axios.get.mockResolvedValue({ data: mockData });

    render(<News />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByText(/Crypto News 1/i)[0]).toBeInTheDocument();
    });
  });
});
