import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import "./App.scss";
import Header2 from "./components/Header2/Header2";

const Home = lazy(() => import("./pages/Home/Home"));
const SearchLawyer = lazy(() => import("./pages/SearchLawyer/SearchLawyer"));
const ChatView = lazy(() => import("./pages/ChatView/ChatView"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header2 />
                <Home />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Header /> <SearchLawyer />
              </>
            }
          />
          <Route
            path="/messages"
            element={
              <>
                <Header />
                <ChatView />
              </>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
