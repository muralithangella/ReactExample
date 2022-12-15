import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const Error_msg = "entereted value is less than 18 yrs";
  const [Value, setValue] = useState();
  const [isError, setisError] = useState(false);
  const errorHandler = (e) => {
    setisError(false);
    setValue(e.target.value);
    console.log(Value);
    if (e.target.value < 18) {
      setisError(true);
    }
  };

  return (
    <div className="App">
      <input placeholder="enter value" value={Value} onChange={errorHandler} />
      {isError ? <span>{Error_msg}</span> : null}
    </div>
  );
}
