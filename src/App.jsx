import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-300 sm:bg-green-300">Hello World!</div>
    </>
  );
}

export default App;
