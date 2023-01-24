import { Route, Routes } from "react-router-dom";
import Counter from "./Counter/counter";
import CreateCounter from "./CreateCounter/createCounter";
import Home from "./Home/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateCounter />} />
      <Route path="/counter/:id" element={<Counter />} />
    </Routes>
  );
};

export default Routing;
