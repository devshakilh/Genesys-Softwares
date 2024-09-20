import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import Component from "./Components/Component";

// The App.jsx is a wrapper only, just you can copy the component folder & Name it accordingly

const App = () => {
  return (
    <>
      <Component />
    </>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
