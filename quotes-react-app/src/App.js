
import './App.css';
import React, {useState, useEffect} from 'react';
import Quote from './Quote';
import Button from './Button';

function App() {
  const [quotesData, setQuotesData] = useState({quote: ""});
  useEffect(() => {
fetch (`https://friendly-space-tribble-5wg6jqq7r6q27rgx-5000.app.github.dev/quotes/random`)
.then(res => res.json())
.then((data) => {
  setQuotesData(data);
});
  }, []);

  return (
    <div className="main">
      <Quote quotesData = {quotesData} setQuotesData = {setQuotesData}/>
      <Button quotesData = {quotesData} setQuotesData = {setQuotesData}/>
    </div>
  );
}

export default App;
