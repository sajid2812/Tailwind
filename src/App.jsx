import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <div className="h-screen bg-blue-700 flex justify-center items-center">
        <div>
          <h2 className="text-white text-2xl font-medium">Verify Your Age</h2>
        </div>
        <Button disabled={true}>Sign up</Button>
      </div>
    </>
  );
}

export default App;
