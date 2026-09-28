import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Mon fil de tweets</h1>
      <Outlet />
    </>
  );
}

export default App;