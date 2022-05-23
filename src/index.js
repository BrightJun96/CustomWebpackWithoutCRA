import React from "react";
import App from "./App";
import Example from "./Example";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";
import Image from "./Image";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/example" element={<Example />} />
      <Route path="/test" element={<Test />} />
      <Route path="/image" element={<Image />} />
    </Routes>
  </BrowserRouter>
);
