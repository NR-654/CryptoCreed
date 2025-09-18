import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Features from "./Components/Features";
import About from "./Components/About";
import Contact from "./Components/Contact";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#252930",
    color: "white",
    minHeight : "100vh",
  },
});



function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Route path="/" component={HomePage} exact />
        <Route path="feature" component={Features} exact />
<Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
 </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
