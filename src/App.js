import React, { useState } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [activeItem, setActiveItem] = useState("Home Page");

  return (
    <main>
      <Router>
        <Header />
        <TabNav activeItem={activeItem} setActiveItem={setActiveItem} />
        <AppRouter activeItem={activeItem} />
      </Router>
    </main>
  );
}
