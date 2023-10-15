import Routes from "./routes";

const data = {
  appNames: ["childApp"],
};

function App() {
  return <Routes appNames={data.appNames} />;
}

export default App;
