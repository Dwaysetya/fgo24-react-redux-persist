import React, { useRef } from "react";

function InputData({ onSubmit }) {
  const inputRef = useRef();

  function submitData(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim();
    onSubmit(inputValue);
    inputRef.current.value = "";
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={submitData}>
      <div className="flex justify-center">
        <h1 className="font-extrabold text-white text-4xl">
          Silahkan List Budget Pengeluaran kamu
        </h1>
      </div>
      <div className="h-12 border flex overflow-hidden rounded">
        <input
          ref={inputRef}
          name="value"
          className="flex-1 outline-none px-5 text-white"
          type="text"
        />
      </div>
      <button className="h-12 bg-orange-700 text-white" type="submit">
        Submit
      </button>
    </form>
  );
}

export default InputData;
