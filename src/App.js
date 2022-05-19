import React from "react";
import './App.css';
import About from "./components/About";
import Info from "./components/Info";
import Footer from "./components/Footer";





function App() {
  return (
    <div className="App">s
      <header className="App-header">
        <div>
        <About />
        </div>
      </header>
      <main>
        <Info  />
      </main>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
