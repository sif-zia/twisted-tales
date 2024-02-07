import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
