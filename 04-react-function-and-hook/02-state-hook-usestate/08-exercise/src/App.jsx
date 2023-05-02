import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const nameChange = ({ target }) => {
    setName(target.value);
  };

  const bioChange = ({ target }) => {
    setBio(target.value);
  };

  useEffect(() => {
    setName("Chang"), setBio("bahbahabhabah");
  }, []);

  return (
    <div id="app">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL2ZnNcQ2nJIr8zpwMl0MR-WJtv-POh5TZA&usqp=CAU"
        alt="Capybara"
      />
      <Info
        name={name}
        bio={bio}
        nameChange={nameChange}
        bioChange={bioChange}
      />
      <Social />
    </div>
  );
};

const Info = ({ name, bio, nameChange, bioChange }) => {
  return (
    <div>
      <input
        onChange={nameChange}
        type="text"
        // value={name}
        placeholder="name here"
      />
      &nbsp; &nbsp;
      <input
        onChange={bioChange}
        type="text"
        // value={bio}
        placeholder="bio here"
      />
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
