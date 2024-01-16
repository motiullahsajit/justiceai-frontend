import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const SearchLawyer = lazy(() => import("./pages/SearchLawyer/SearchLawyer"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchLawyer />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
