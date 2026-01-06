import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./scss/Index.scss";
import "./scss/Header.scss";
import "./scss/Home.scss";
import "./scss/footer.scss";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Index from "./pages/Home";

library.add(fas, fab);

export { FontAwesomeIcon };

const container = document.getElementById("root");

function Content() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function Main() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

if (container) {
  // Prevent creating multiple roots (e.g., during hot module reload)
  let root = window.__reactRoot;
  if (!root) {
    root = ReactDOM.createRoot(container);
    window.__reactRoot = root;
  }
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error("Root container missing in HTML.");
}
