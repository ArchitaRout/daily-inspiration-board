import { useEffect, useState } from 'react';

export function useStreak() {
  const [streak, setStreak] = useState({ current: 0, lastDate: '' });

  useEffect(() => {
    const saved = localStorage.getItem('streak');
    const today = new Date().toISOString().split('T')[0];

    let next = { current: 1, lastDate: today };

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const last = parsed.lastDate;
        const y = new Date();
        y.setDate(y.getDate() - 1);
        const yesterday = y.toISOString().split('T')[0];

        if (last === today) {
          next = parsed;
        } else if (last === yesterday) {
          next = { current: parsed.current + 1, lastDate: today };
        }
      } catch (e) {
        console.error(e);
      }
    }

    setStreak(next);
    localStorage.setItem('streak', JSON.stringify(next));
  }, []);

  return streak;
}
