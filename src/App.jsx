import { useState } from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
/* import "./App.css"; */

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
