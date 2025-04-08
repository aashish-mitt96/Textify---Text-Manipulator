import HomePage from "./pages/HomePage";
import ToasterProvider from "./components/ToasterProvider";

function App() {
  return (
    <>
      <ToasterProvider />
      <HomePage />
    </>
  );
}

export default App;
