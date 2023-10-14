import React from "react";

function transformUsername(username: string) {
  // Split the username by '-'
  const parts = username.split("-");

  // Capitalize the first letter of each part
  const transformedParts = parts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  });

  // Join the parts back together without '-'
  const transformedUsername = transformedParts.join("");
  return transformedUsername;
}

export default function DynamicImport({
  componentName,
}: {
  componentName: string;
}) {
  const [Component, setComponent] =
    React.useState<React.FunctionComponent | null>(null);

  React.useMemo(() => {
    const loadComponent = async () => {
      const loader = await import(
        `../pages/${transformUsername(componentName)}.tsx`
      ).catch((e) => {
        console.log(e);
        return import("../pages/404Page.tsx");
      });

      setComponent(() => loader.default);
    };
    loadComponent();
  }, [componentName]);

  return Component ? <Component /> : <div>Loading</div>;
}
