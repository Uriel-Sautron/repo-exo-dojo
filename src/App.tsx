import React, { useState, Dispatch, SetStateAction } from "react";
import { QuotesDisplay } from "./QuotesDisplay";
import "./App.css";
// https://simpsons-quotes-api.herokuapp.com/quotes?count=num
function App() {
  const [isLeftTab, setIsLeftTab] = useState(true);
  const [quotesTab1, setQuotesTab1] = useState<[]>([]);
  const [quotesTab2, setQuotesTab2] = useState<[]>([]);

  const handleFetchQuotes = (setQuotes: Dispatch<SetStateAction<[]>>) => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3")
      .then((response) => response.json())
      .then((response) => setQuotes(response));
  };

  return (
    <div className="App">
      <button type="button" onClick={() => setIsLeftTab(!isLeftTab)}>
        Change Tab
      </button>
      <div className="container">
        <div className="left">
          {isLeftTab && (
            <div>
              <button
                type="button"
                onClick={() => handleFetchQuotes(setQuotesTab1)}
              >
                Get Quote
              </button>
              <QuotesDisplay quotes={quotesTab1} setQuotes={setQuotesTab1} />
            </div>
          )}
        </div>
        <div className="right">
          {!isLeftTab && (
            <div>
              <button
                type="button"
                onClick={() => handleFetchQuotes(setQuotesTab2)}
              >
                Get Quote
              </button>
              <QuotesDisplay quotes={quotesTab2} setQuotes={setQuotesTab2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
