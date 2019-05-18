import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";
import App from ".src/App";
import getFacts from ".src/facts";
import express from "express";
import fs from "fs";

const index = fs.readFileSync(__dirname + "/index.html", "utf8");

// Whenever user sends a request, fetch the facts & create SSR version of the app
const app = express();

app.get("**", (req, res) => {
  // Resolves the promise
  getFacts().then(facts => {
    //Pass through App and facts
    // Returns a string
    const html = renderToString(<App facts={facts} />);
    const finalHtml = index.replace("<!-- ::APP:: -->", html);
    // Setting cashing layer using Firabase Histing's CDN cashing power
    // Setting the cache cotrol header, browser cache time is 600, CDM level is 1200
    // When user makes a request the server side rendered app, it will first generate it &&
    // && then it will store it in the CDN edge for 1200 seconds(10 minutes)
    // Everyone who makes a request for that app in that area will be read in the CDN and not from the server, results in faster load time
    res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
    res.send(finalHtml);
  });
});

// On request pass through the app
export let ssrapp = functions.https.onRequest(app);
