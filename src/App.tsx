import * as React from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = React.useState("");
  const test = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    // const temp = event.target.value.replace(/^[0-9]/g, "");
    // setVal(temp);
    const pattern = /^[0-9\b]+$/;
    console.log(pattern.test(event.target.value));
    if (pattern.test(event.target.value)) {
      setVal(event.target.value);
    } else {
      return false;
    }
  };
  return (
    <div className="App">
      <input type="text" onInput={test} maxLength={1} value={val} />
      <div>{val}</div>
    </div>
  );
}
