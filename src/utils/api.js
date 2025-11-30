// src/utils/api.js
export async function fetchQuote() {
  try {
    const res = await fetch('https://dummyjson.com/quotes/random');
    console.log('quote status', res.status);
    if (!res.ok) throw new Error('Failed to fetch quote');

    const data = await res.json(); // single object
    console.log('quote data', data);

    return {
      content: data.quote,
      author: data.author,
    };
  } catch (e) {
    console.error('Quote fetch failed:', e);
    return null;
  }
}


export async function fetchTip() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    return data.slip;
  } catch (e) {
    console.error('Tip fetch failed:', e);
    return null;
  }
}
