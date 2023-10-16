import Home from "./pages/Home";
import About from "./pages/About";
import { NavigationManager } from "./components/NavigationManager";
import Root from "./layout/Root";

const routesArr = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Root />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Shit Happens but you are stll in child man</div>,
  },
];

export default routesArr;
