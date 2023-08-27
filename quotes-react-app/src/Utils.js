import React from "react";

const generateNewQuote = (func) => {
    fetch(`https://friendly-space-tribble-5wg6jqq7r6q27rgx-5000.app.github.dev/quotes/random`)
      .then(res => res.json())
      .then(data => {
        func(data);
      })
      .catch(error => {
        console.error("Error fetching new quote:", error);
      });
  };

  export {generateNewQuote};