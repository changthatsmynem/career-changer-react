import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Chang");
  const [bio, setBio] = useState("bahbabahabahab");

  return (
    <div id="app">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL2ZnNcQ2nJIr8zpwMl0MR-WJtv-POh5TZA&usqp=CAU"
        alt="Capybara"
      />
      <Info name={name} bio={bio} />
      <Social />
    </div>
  );
};

const Info = ({ name, bio }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

const Social = ({ name, bio }) => {
  return (
    <div>
      <a href="#">Facebook</a>&nbsp;&nbsp;<a href="#">Twitter</a>
    </div>
  );
};

export default App;
