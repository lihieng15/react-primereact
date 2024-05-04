import { useState } from "react";
import "./App.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import Header from "./welcomePage/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./welcomePage/components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
