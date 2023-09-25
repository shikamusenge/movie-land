import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
  const navigate = useNavigate();
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
        <p className="mb-2 text-right">
          <Link to="/signup">Create new Account</Link>
        </p>
        <div>
          <input
            type="submit"
            name="save"
            value="Login"
            className="rounded-lg  h-10 w-full bg-[red] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const UserDeatail = usersData.filter(
                (item) => item.username == username && item.password == password
              );
              if (UserDeatail.length > 0) {
                UserDeatail.password = "*******";
                localStorage.setItem("userAcount", JSON.stringify(UserDeatail));
                navigate("/dashboard");
              } else {
                alert("invalid user name or password");
              }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
