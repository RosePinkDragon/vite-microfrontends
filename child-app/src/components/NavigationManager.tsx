import { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationManagerProps {
  children: ReactElement;
}

export function NavigationManager({ children }: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      console.log("hi");
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname) {
        return;
      }

      console.log(pathname);
      navigate(pathname);
    }

    window.addEventListener("[shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener("[shell] navigated", shellNavigationHandler);
    };
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[app1] navigated", { detail: location.pathname })
    );
  }, [location]);

  return children;
}
