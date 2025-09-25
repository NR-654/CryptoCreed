import React from "react";
import About from "../Components/About";
import Header from "../Components/Header";
import Contact from "../Components/Contact";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

const HomePage = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Header /> 
      <br />
      <Features /> <br />
      <br /> <About /> <br /> <br /> <Contact /> <Footer />
    </ThemeProvider>
  );
};

export default HomePage;
