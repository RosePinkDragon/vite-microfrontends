import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RoutingStrategy } from "./types/routings.ts";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const rootElement = createRoot(mountPoint);
  rootElement.render(
    <React.StrictMode>
      <App
        initialPathname={initialPathname}
        routingStrategy={routingStrategy}
      />
    </React.StrictMode>
  );

  return () => queueMicrotask(() => rootElement.unmount);
};

export { mount };
