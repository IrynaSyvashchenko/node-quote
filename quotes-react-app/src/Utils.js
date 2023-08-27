const generateNewQuote = (func) => {
    fetch(`http://localhost:5000/quotes/random/`)
      .then(res => res.json())
      .then(data => {
        func(data);
      })
      .catch(error => {
        console.error("Error fetching new quote:", error);
      });
  };

  export {generateNewQuote};