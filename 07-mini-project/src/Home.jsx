import Layout from "./Layout";
import { useContext, useEffect, useState } from "react";
import { Context } from "./UserContext";
import Admin from "./Admin";
import User from "./User";
import Navbar from "./Navbar";

const Home = () => {
  // You have to use getUserRole() to get role of current user
  // role is specify below
  // admin role is 'admin'
  // user role is 'user'
  // 'other' is who didn't login.
  const { getUserRole, getCurrent } = useContext(Context);
  // example of getUserRole.
  // const _role = getUserRole()
  // return type is always string.
  const [role, setRole] = useState();

  const initApp = () => {
    setRole(getUserRole());
  };

  useEffect(initApp, [getCurrent]);

  // You have to add condition here according to role.
  if (role === "admin") {
    return (
      <Layout>
        <Admin />
      </Layout>
    );
  }

  return (
    <Layout>
      <User />
    </Layout>
  );
};

export default Home;

// const { getUserRole, getCurrent } = useContext(Context);
// // example of getUserRole.
// // const _role = getUserRole()
// // return type is always string.
// const [role, setRole] = useState();

// const InitApp = () => {
//   console.log("initApp");
//   setRole(getUserRole());
//   console.log("getUserCurrent", getCurrent());
// };

// useEffect(InitApp, [getCurrent]);
