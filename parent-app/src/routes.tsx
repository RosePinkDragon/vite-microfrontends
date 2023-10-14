import { Link, Outlet, useRoutes } from "react-router-dom";
import DynamicImport from "./components/DynamicImport";
import NotFound from "./pages/404Page";
import Home from "./pages/Home";

const Routes = ({ appNames }: { appNames: string[] }) => {
  const children = [
    {
      path: "/",
      element: <Home />,
    },
    { path: "*", element: <NotFound /> },
  ];

  const appNamesArray =
    Array.isArray(appNames) &&
    appNames.map((appName) => {
      return {
        path: `/${appName}`,
        element: <DynamicImport componentName={appName} />,
      };
    });

  if (appNamesArray) children.push(...appNamesArray);

  return useRoutes([
    {
      element: (
        <div>
          <Link to={"/"} key={"/"}>
            parent home
          </Link>
          <br />
          {appNames.map((appName) => (
            <Link to={appName} key={appName}>
              {appName}
            </Link>
          ))}
          <br />
          <br />
          <br />
          <br />
          <Outlet />
          <h4>End if parent</h4>
        </div>
      ),
      children,
    },
  ]);
};

export default Routes;
