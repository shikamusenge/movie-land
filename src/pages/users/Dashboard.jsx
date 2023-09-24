import React, { useEffect } from "react";
import { Account } from "../../Authentication/Auth";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // !Account.loggedIn && navigate("/login");
  }, []);

  return (
    <div className="h-screen flex">
      <div>Welcome {Account.username} </div>
      <div
        className="h-fit px-10 py-3 bg-red-600 text-white mx-5 cursor-pointer rounded-lg"
        onClick={() => {
          localStorage.setItem("userAcount", null);
          navigate("/login");
        }}
      >
        {" "}
        Log out
      </div>
    </div>
  );
};

export default Dashboard;
