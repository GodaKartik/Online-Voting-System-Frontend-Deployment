import Header from "../components/Header";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [users, setUsers] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    // Axios.get("http://localhost:4000/userRoute")
    Axios.get("https://online-voting-system-deployment.onrender.com/userRoute")
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data);
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);
  // const setHREF = () => {
  //   const user_type = props.type === "admin" ? "/create/" : "/vote/";
  //   return user_type + username;
  // };
  const authenticate = () => {
    const USER = users.find((user) => user.username === username);
    if (USER) {
      if (USER.password === password) {
        // navigateTo(setHREF());
        if (USER.userType === "admin") {
          navigateTo("/create/" + username);
        } else {
          navigateTo("/vote/" + username);
        }
        // setLogged("logged in");
      } else {
        setLogged("Incorrect password");
      }
    } else {
      setLogged("Invalid username");
    }
  };

  return (
    <div>
      <Header />
      <center className="w-fit mx-auto border border-black rounded-md p-1 mt-5">
        <h2 className="underline">Log In</h2>
        <table>
          <tr>
            <td>
              <label htmlFor="username">Username</label>
            </td>
            <td>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                className="border-b border-black mx-2"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="border-b border-black mx-2"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </td>
          </tr>
        </table>

        <button
          className="border border-black rounded-sm p-1 hover:text-white hover:bg-black m-2"
          onClick={authenticate}
        >
          Login
        </button>
        <div className="text-red-500">{logged}</div>
      </center>
    </div>
  );
}

export default Login;
