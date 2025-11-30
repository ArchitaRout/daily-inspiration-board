import { useEffect, useState } from 'react';
import { fetchTip } from '../utils/api';

export default function TipSection() {
  const [tip, setTip] = useState(null);

  useEffect(() => {
    fetchTip().then(setTip);
  }, []);

  return (
    <section className="card">
      <h2>💡 Tip of the Day</h2>
      {tip ? (
        <p>{tip.advice}</p>
      ) : (
        <p>Loading tip...</p>
      )}
    </section>
  );
}
