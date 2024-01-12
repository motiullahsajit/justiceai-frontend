import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const SearchLawyer = lazy(() => import("./pages/SearchLawyer/SearchLawyer"));
const SolvePrompt = lazy(() => import("./pages/SolvePrompt/SolvePrompt"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchLawyer />} />
          <Route path="/solve" element={<SolvePrompt />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
