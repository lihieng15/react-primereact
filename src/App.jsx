import { useState } from "react";
import "./App.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <i
          className="pi pi-check bg-green-400 rounded-xl px-3 py-2 m-5"
          style={{ color: "slateblue" }}
        ></i>
        <i
          className="pi pi-times bg-red-400 rounded-xl px-3 py-2 m-5"
          style={{ color: "green" }}
        ></i>
        <i
          className="pi pi-search bg-yellow-400 rounded-xl px-3 py-2 m-5"
          style={{ color: "var(--primary-color)" }}
        ></i>
        <i
          className="pi pi-user bg-blue-400 rounded-xl px-3 py-2 m-5"
          style={{ color: "#708090" }}
        ></i>
      </div>
      <button
        className="bg-red-400 rounded-xl px-3 py-2 justify-center items-center flex"
        onClick={() => setCount((count) => count + 1)}
      >
        Touch me to count {count}
      </button>
      <Button
        className="bg-green-400 rounded-xl px-3 py-2 justify-center items-center flex"
        icon="pi pi-check"
      />
      <Button
        className="bg-green-400 rounded-xl px-3 py-2 justify-center items-center flex"
        label="Submit"
        icon="pi pi-check"
      />
      <Button
        className="bg-green-400 rounded-xl px-3 py-2 justify-center items-center flex"
        label="Submit"
        icon="pi pi-check"
        iconPos="right"
      />
    </>
  );
}

export default App;
