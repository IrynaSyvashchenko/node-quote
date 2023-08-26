import React, {useState, useEffect} from 'react';

function Quote() {
    const [quotesData, setQuotesData] = useState({quote: "Pleceholder"});
    useEffect(() => {
fetch (`https://friendly-space-tribble-5wg6jqq7r6q27rgx-5000.app.github.dev/quotes`)
.then(res => res.json())
.then((data) => {
    setQuotesData(data);
    console.log(data);
  });
    }, []);
}

