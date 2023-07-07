import './App.css';
import { useState } from 'react';

function App() {
const[count, setCount] = useState(0);

console.log("count",count);
console.log("setCount",setCount);

function handleClick() {
  setCount(count+1);
}

  return (
    <div className="App">
      <button onClick={handleClick}>You have pressed me {count} times</button>
    </div>
  );
}

export default App;
