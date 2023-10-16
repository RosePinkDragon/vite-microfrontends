import("./main").then(({ mount }) => {
  const localRoot = document.getElementById("root");
  mount({
    mountPoint: localRoot!,
    routingStrategy: "browser",
  });
});
