import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-between">
        <div>Child</div>
        <div>Child</div>
        <div>Child</div>
        <div>Child</div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-5 bg-blue-300">First</div>
        <div className="col-span-5 bg-red-300">Second</div>
        <div className="col-span-2 bg-green-300">Third</div>
      </div>
    </>
  );
}

export default App;
