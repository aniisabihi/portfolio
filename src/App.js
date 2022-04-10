import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/main/ErrorBoundary";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/main/Home";
import Footer from "./components/navigation/Footer";
import Post from "./components/information/Post";
import About from "./components/information/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
        </nav>

        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element="./img/AniisaBihi_CV.pdf" />
            </Routes>
          </ErrorBoundary>
        </main>

        <footer>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </footer>
      </div>
    </BrowserRouter>
  );
}
