import React from "react";
import { render } from "react-dom";
import App from "./App";
import getFacts from "./facts";

// Resolving facts from the promise
getFacts().then(facts => {
  // Takes top level app component & place where to attach that component
  // Passes 'facts' as a prop, which calls the App function with facts as the parameter
  render(<App facts={facts} />, document.querySelector("#root"));
});
