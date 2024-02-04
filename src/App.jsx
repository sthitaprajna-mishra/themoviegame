import Container from "./components/Container";
import MyProvider from "./components/Provider";

function App() {
  return (
    <MyProvider>
      <Container />
    </MyProvider>
  );
}

export default App;
