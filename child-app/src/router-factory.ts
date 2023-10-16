import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { RoutingStrategy } from "./types/routings";
import routesArr from "./router";

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === "browser") {
    return createBrowserRouter(routesArr);
  }

  const initialEntries = [initialPathname ?? "/"];
  return createMemoryRouter(routesArr, { initialEntries: initialEntries });
}
