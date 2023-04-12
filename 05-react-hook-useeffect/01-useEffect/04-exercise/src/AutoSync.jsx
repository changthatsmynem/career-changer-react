import React, { useState, useEffect } from "react";

const AutoSync = () => {
  const [employ, setEmploy] = useState({});
  const [employList, setEmployList] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEmploy((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployList((prev) => [...prev, employ]);
    setEmploy({});
  };

  return (
    <div id="app">
      <h1>Table Example</h1>
      <Form
        employ={employ}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List employList={employList} />
    </div>
  );
};

const Form = ({ employ, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={employ.name || ""}
        placeholder="Type new name here"
      />
      &nbsp; &nbsp;
      <input
        onChange={handleChange}
        type="text"
        name="organization"
        value={employ.organization || ""}
        placeholder="Type new organization here"
      />
      &nbsp; &nbsp;
      <input
        onChange={handleChange}
        type="text"
        name="position"
        value={employ.position || ""}
        placeholder="Type new position here"
      />
      &nbsp; &nbsp;
      <button type="submit">save</button>
    </form>
  );
};

const List = ({ employList }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Organization</b>
          </td>
          <td>
            <b>Position</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {employList.map((employ, index) => (
          <tr key={index}>
            <td>{employ.name}</td>
            <td>{employ.organization}</td>
            <td>{employ.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AutoSync;
