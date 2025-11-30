import { useEffect, useState } from 'react';

export default function TodoSection() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: crypto.randomUUID(), text: input.trim(), done: false },
    ]);
    setInput('');
  };

  const toggleTask = id => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const removeTask = id => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <section className="card">
      <h2>📝 To-Do List</h2>
      <div className="todo-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="What needs to be done?"
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map(t => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
              />
              <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                {t.text}
              </span>
            </label>
            <button onClick={() => removeTask(t.id)}>✕</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
