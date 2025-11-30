import { useEffect, useState } from 'react';
import { fetchQuote } from '../utils/api';

export default function QuoteSection() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote().then(setQuote);
  }, []);

  return (
    <section className="card">
      <h2>📜 Quote of the Day</h2>
      {quote ? (
        <blockquote>
          "{quote.content}"<br />
          <cite>— {quote.author}</cite>
        </blockquote>
      ) : (
        <p>Loading quote...</p>
      )}
    </section>
  );
}
