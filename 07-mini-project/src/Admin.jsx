import { useState, useEffect, useContext } from "react";
import { Context } from "./UserContext";

const Admin = () => {
  // You have to get all user from fetchData() and display as table html.
  const { fetchData } = useContext(Context);
  // example of fetchData() usage
  // const data = fetchData()
  // data will return array of user object, otherwise empty array
  // example of user Object show below
  // {
  //     id: 0,
  //     username: 'example',
  //     fullname: 'example',
  //     organization: 'example'
  // }
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = fetchData();
    setUsers(data);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Full name</b>
            </td>
            <td>
              <b>Organization</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.fullname}</td>
                <td>{i.organization}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {[{ username: "hello" }].map((item) => (
        <div>{item.username}</div>
      ))} */}
    </div>
  );
};

export default Admin;
