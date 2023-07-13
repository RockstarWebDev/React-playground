import { useState, useMemo } from "react";

export default function UseMemoSum() {
  const [text, setTxt] = useState("some text");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = useMemo(() => {
    console.log("Computing sum...");
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Text: {text}</p>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>sum: {sum}</p>
      <button onClick={() => setTxt("New Text!")}>Set Text</button>
      <button onClick={() => setA(a + 1)}>Increment a</button>
      <button onClick={() => setB(b + 1)}>Increment b</button>
    </div>
  );
}
