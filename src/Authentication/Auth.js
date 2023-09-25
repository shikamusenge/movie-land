import { useNavigate } from "react-router-dom";
export const Account = JSON.parse(localStorage.getItem("userAcount")) || null;
export const authenticateUser = (page) => {
  const navigate = useNavigate();
  page == "loggin" &&
    page != "loggin" &&
    !Account.loggedIn &&
    navigate("/login");
  console.log("hello");
};
