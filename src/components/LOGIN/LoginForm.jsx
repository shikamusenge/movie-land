import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form className="border rounded-md  p-3 shadow-lg w-[20rem] ">
        <div className="grid grid-row-2 mx-2 my-5">
          <label htmlFor="usn" className="w-full py-3">
            Username
          </label>
          <input
            type="text"
            name="usn"
            id="usn"
            className="border rounded-lg focus:border-1 h-10 px-4 focus:outline-none outline-none"
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-row-2 mx-2 my-5">
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            name="psw"
            id="psw"
            className="border rounded-lg focus:outline-none outline-none h-10 px-4"
            placeholder="Enter Pasword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            name="save"
            value="Login"
            className="rounded-lg  h-10 w-full bg-[red] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const newUser = JSON.stringify({
                username: username,
                loggedIn: true,
              });
              localStorage.setItem("userAcount", newUser);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
