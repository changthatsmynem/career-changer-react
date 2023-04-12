import Layout from "./Layout";
import { Context } from "./UserContext";
import { useState, useContext } from "react";

const Signup = () => {
  // You have to pass data to signup() function to successful registration.
  const { signup } = useContext(Context);
  // example of signup with button onClick event listerner.
  // <button onClick={() => signup({
  //     username: 'mock',
  //     password: 'mock',
  //     fullname: 'mock',
  //     organization: 'mock'
  // })}>Text</button>
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();
  const [organization, setOrganization] = useState();

  return (
    <Layout>
      <div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          placeholder="fullname"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="organization"
        />
        <br />
        <button
          onClick={() =>
            signup({
              username: username,
              password: password,
              fullname: fullname,
              organization: organization,
            })
          }
        >
          Signup
        </button>
      </div>
    </Layout>
  );
};

export default Signup;
