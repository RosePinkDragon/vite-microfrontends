import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const mount = ({ mountPoint }: { mountPoint: HTMLElement }) => {
  const rootElement = createRoot(mountPoint);
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return () => queueMicrotask(() => rootElement.unmount);
};

export { mount };
