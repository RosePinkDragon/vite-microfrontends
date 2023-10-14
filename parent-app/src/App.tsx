import Routes from "./routes";

const data: {
  appNames: string[];
} = {
  appNames: ["childApp"],
};

function App() {
  return (
    <>
      <div>
        <h2>Parent App</h2>
        <Routes appNames={data.appNames} />
      </div>
    </>
  );
}

export default App;
