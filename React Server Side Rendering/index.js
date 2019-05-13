import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";
import App from ".src/App";
import getFacts from ".src/facts";
import * as express from "express";

// Whenever user sends a request, fetch the facts & create SSR version of the app
const app = express();
app.get("**", (req, res) => {
  // Resolves the promise
  getFacts().then(facts => {});
});
