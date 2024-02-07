import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
        </Route>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
