import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Services from "./Services";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react</h1>
        <Home/>
        <Contact/>
        <About/>
        <Services/>
      </header>
    </div>
  );
}

export default App;
