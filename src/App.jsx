import { useRef, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Otp />
    </>
  );
}

function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  return (
    <div className="flex justify-center">
      <SubOtp
        ref={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
      />
      <SubOtp
        ref={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
      />
      <SubOtp
        ref={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
      />
      <SubOtp
        ref={ref4}
        onDone={() => {
          ref5.current.focus();
        }}
      />
      <SubOtp
        ref={ref5}
        onDone={() => {
          ref6.current.focus();
        }}
      />
      <SubOtp ref={ref6} />
    </div>
  );
}

function SubOtp({ ref, onDone }) {
  return (
    <div>
      <input
        ref={ref}
        onChange={(e) => {
          onDone();
        }}
        type="text"
        className="m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none px-4 text-white"
      />
    </div>
  );
}

export default App;
