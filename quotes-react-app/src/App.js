
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [quotesData, setQuotesData] = useState({quote: "Pleceholder"});
  useEffect(() => {
fetch (`https://friendly-space-tribble-5wg6jqq7r6q27rgx-5000.app.github.dev/quotes/random`)
.then(res => res.json())
.then((data) => {
  setQuotesData(data);
  console.log(data);
});
  }, []);

  return (
    <div className="main">
      <header className="header">
        <p>{quotesData.quote}</p>
        {/* <p>{quotesData.}</p> */}
      </header>
    </div>
  );
}

export default App;
