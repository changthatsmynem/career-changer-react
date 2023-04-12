import React, { useState } from "react";

function App() {
  // adding state here.
  const [choices, setChoices] = useState();

  const handleClick = (value) => {
    setChoices(value);
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")}>Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo choices={choices} />
    </div>
  );
}

function DisplayInfo(props) {
  let choice;
  if (props.choices === "Fullname") {
    choice = <h2>John Doe</h2>;
  } else if (props.choices === "Age") {
    choice = <h2>30</h2>;
  } else if (props.choices === "Picture") {
    choice = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    choice = <p>Please select an option.</p>;
  }

  return <div>{choice}</div>;
}

export default App;
