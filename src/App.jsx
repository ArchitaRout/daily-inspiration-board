import './App.css';
import QuoteSection from './components/QuoteSection';
import TipSection from './components/TipSection';
import TodoSection from './components/TodoSection';
import { getDailyGradient } from './utils/dailyGradient';
import { useStreak } from './hooks/useStreak';
import background from './assets/bg3.jpg';



function App() {
  const bg = getDailyGradient();
  const streak = useStreak();

  return (
    <div 
      className="app" 
      style={{ 
        minHeight: '100vh', 
         backgroundImage: `url(${background})`
      }}
    >
      <div className="overlay">
        <header className="header">
          <div>
            <h1>Daily Dashboard</h1>
            <p className="streak">🔥 Streak: {streak.current} days</p>
          </div>
        </header>

        <main className="grid">
          <QuoteSection />
          <TipSection />
          <TodoSection />
        </main>
      </div>
    </div>
  );
}

export default App;
