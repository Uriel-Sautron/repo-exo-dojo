import React, { Dispatch, SetStateAction, useEffect } from "react";
type QuoteType = {
  character: string;
  image: string;
  quote: string;
};

type QuotesDisplayProps = {
  quotes: QuoteType[];
  setQuotes: Dispatch<SetStateAction<[]>>;
};

export const QuotesDisplay: React.FC<QuotesDisplayProps> = ({
  quotes,
  setQuotes,
}) => {
  useEffect(() => {
    return setQuotes([]);
  }, [setQuotes]);

  return (
    <>
      {quotes.map((quote) => (
        <div key={quote.quote}>
          <h1>{quote.character}</h1>
          <img src={quote.image} alt="" />
          <p>{quote.quote}</p>
        </div>
      ))}
    </>
  );
};
