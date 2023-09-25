import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const Account = JSON.parse(localStorage.getItem("userAcount")) || [];
  if (Account.length == 0) location.href = "/login";
  const [user] = Account;
  const { firstName, lastName, email, username } = user;
  useEffect(() => {
    Account.length == 0 && navigate("/login");
  }, []);

  return (
    <div className="h-screen flex">
      <div className="flex justify-center items-center gap-5 mx-[4rem] w-full border shadow-amber-800 shadow-2xl rounded-lg">
        <div>
          <div>
            <i className="fa fa-user text-[30rem] mx-4"></i>
          </div>
          <div className="text-center text-2xl">{username}</div>
        </div>
        <div className=" flex text-2xl font-extrabold">
          <div>
            <div>
              {firstName} {lastName}
            </div>
            <div>{username}</div>
            <div>
              {email} {lastName}
            </div>
          </div>
          <div
            className="h-fit px-10 py-3 bg-red-600 text-white mx-5 cursor-pointer rounded-lg"
            onClick={() => {
              localStorage.setItem("userAcount", "[]");
              navigate("/login");
            }}
          >
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
