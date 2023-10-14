import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const mount = ({ mountPoint }: { mountPoint: HTMLElement }) => {
  const rootElement = ReactDOM.createRoot(mountPoint);
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return () => queueMicrotask(() => rootElement.render);
};

export { mount };
