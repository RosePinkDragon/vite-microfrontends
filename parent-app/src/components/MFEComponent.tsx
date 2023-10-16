/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MFEComponent = (props: {
  baseName: string;
  routingPrefix: string;
  mount: ({
    mountPoint,
    initialPathname,
  }: {
    mountPoint: HTMLDivElement;
    initialPathname: string;
  }) => any;
}) => {
  const { baseName, routingPrefix, mount } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const navigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = baseName + pathname;
      if (newPathname === location.pathname + location.search) return;
      navigate(newPathname);
    };

    window.addEventListener(
      `[${routingPrefix} navigated]`,
      navigationEventHandler
    );

    return () => {
      window.removeEventListener(
        `[${routingPrefix} navigated]`,
        navigationEventHandler
      );
    };
  }, [baseName, location.pathname, location.search, navigate, routingPrefix]);

  useEffect(() => {
    if (location.pathname.startsWith(baseName)) {
      window.dispatchEvent(
        new CustomEvent("[shell navigated]", {
          detail: location.pathname.replace(baseName, "") + location.search,
        })
      );
    }
  }, [baseName, location]);

  const unmountRef = useRef(() => {});
  const firstRunRef = useRef(true);

  useEffect(() => {
    if (!firstRunRef.current) return;
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname:
        location.pathname.replace(baseName, "") + location.search,
    });
    firstRunRef.current = false;
  }, [baseName, location, mount]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id={routingPrefix} />;
};

export default MFEComponent;
