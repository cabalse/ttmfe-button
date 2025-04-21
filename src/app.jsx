import { useState } from "react";

import ClickButton from "./components/click-button/click-button";

import "./app.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="text-2xl font-bold mb-4">TTFME-Button Application</div>
      <ClickButton />
    </div>
  );
}

export default App;
