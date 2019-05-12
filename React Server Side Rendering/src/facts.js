import fetch from "isomorphic-fetch";

// Returns a promise of a response from React Documentation
// Can later call response.JSON to get the actual data
export default function getFacts() {
  return fetch("https://ssr-react.firebaseio.com/facts.json").then(res =>
    res.json()
  );
}
