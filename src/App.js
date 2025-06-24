import  Home from "./Home";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <header className="content">
        <h1>My Movie App</h1>
        <p>Welcome to my movie app, where you can find your favorite action movies!</p>
        <p>Click on the links above to navigate through the app.</p>
        <p>Enjoy your stay!</p>
        <p>Here are some of the movies you can explore:</p>
        <Home/>
      </header>
    </div>
  );
}

export default App;
