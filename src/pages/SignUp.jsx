import { useState } from "react";
import Axios from "axios";

import Header from "../components/Header";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  const infoArray = [username, password, email, userType];

  const onUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <Header />
      <center className="w-fit mx-auto border border-black rounded-md p-1 mt-5">
        <h2 className="underline">Sign Up</h2>
        <form
          onSubmit={() => {
            // Axios.post("http://localhost:4000/userRoute/create-user", {
            Axios.post("https://online-voting-system-deployment.onrender.com/userRoute/create-user", {
              username: infoArray[0],
              password: infoArray[1],
              email: infoArray[2],
              userType: infoArray[3],
            })
              .then((res) => {
                if (res.status === 200) {
                  alert("user created successfully");
                } else {
                  Promise.reject();
                }
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >
          <table className="">
            <tr>
              <td>
                <label htmlFor="username">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="username"
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
                  className="border-b border-black mx-2"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  className="border-b border-black mx-2"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <label for="typetype">User type</label>
              </td>
              <td>
                <input type="radio" name="type" value="voter" onChange={onUserTypeChange} />
                Voter
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="type" value="admin" onChange={onUserTypeChange} />
                Admin
              </td>
            </tr>
          </table>
          <button
            formAction="/"
            className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p>Have an account? </p>
        <button className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
          <a href="/voterlogin">Login as Voter</a>
        </button>
        <button className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
          <a href="/adminlogin">Login as Admin</a>
        </button>
      </center>
    </div>
  );
}

export default SignUp;
