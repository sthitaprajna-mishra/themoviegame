import MyProvider from "./components/Provider";
import Keys from "./components/arena/Keys";
import Home from "./components/home/Home";

function App() {
  return (
    <MyProvider>
      <div className="px-2">
        <Home />
        <Keys />
      </div>
    </MyProvider>
  );
}

export default App;
