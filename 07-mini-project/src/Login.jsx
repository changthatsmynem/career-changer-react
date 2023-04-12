import Layout from "./Layout";
import { useContext, useState } from "react";
import { Context } from "./UserContext";

const Login = () => {
  // You have to pass data to signup() function to successful login.
  const { login } = useContext(Context);
  // example of login with button onClick event listerner.
  // <button onClick={() => login({
  //     username: 'mock',
  //     password: 'mock',
  // })}>Text</button>
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <Layout>
      <div>
        <div className="username">
          <h4>Username</h4>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="username"
          />
        </div>
        <br />
        <div className="password">
          <h4>Password</h4>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <br />
        <button
          className="login-button"
          onClick={() => login({ username: username, password: password })}
        >
          Login
        </button>
      </div>
    </Layout>
  );
};

export default Login;
