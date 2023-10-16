import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router-factory";
import { RoutingStrategy } from "./types/routings";

function App({
  initialPathname,
  routingStrategy,
}: {
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) {
  return (
    <RouterProvider
      router={createRouter({ strategy: routingStrategy, initialPathname })}
    />
  );
}

export default App;
