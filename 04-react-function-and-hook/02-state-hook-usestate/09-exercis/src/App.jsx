import { useState, useEffect } from "react";

const App = () => {
  const [temp, setTemp] = useState(30);

  const handleUp = (e) => {
    setTemp(temp + 1);
  };

  const handleDown = (e) => {
    setTemp(temp - 1);
  };

  return (
    <div id="app">
      <Header temp={temp} />
      <Content temp={temp} />
      <Footer upClick={handleUp} downClick={handleDown} />
    </div>
  );
};

const Header = ({ temp }) => {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temp}</p>
    </header>
  );
};

const Content = ({ temp }) => {
  return (
    <main>
      <Temperature temp={temp} />
    </main>
  );
};

const Temperature = ({ temp }) => {
  return (
    <div id="temperature">
      <span>{temp} Oc</span>
    </div>
  );
};

const Footer = ({ temp, upClick, downClick }) => {
  return (
    <footer>
      <button onClick={upClick}>Up</button>
      <button onClick={downClick}>Down</button>
    </footer>
  );
};

export default App;
