import React from "react";

function Navbar() {
  return <h1>My Portfolio</h1>;
}

function Home() {
  return <h2>Welcome Home</h2>;
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
