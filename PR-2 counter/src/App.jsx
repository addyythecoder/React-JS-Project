// App.jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const decrease = () => {
    if (count <= 0) {
      alert("Number can't be less than 0!");
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease} style={{ marginLeft: '10px' }}>➖ Decrease</button>
      <button onClick={reset} style={{ marginLeft: '10px' }}>🔄 Reset</button>
    </div>
  );
}

export default App;
