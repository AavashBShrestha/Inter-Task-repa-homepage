import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/Index.scss";
import "./scss/Header.scss";
import "./scss/Home.scss";

import Header from "./components/Header.jsx";
import Index from "./pages/Home";

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
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error("Root container missing in HTML.");
}
