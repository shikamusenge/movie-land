import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LOGIN/LoginForm";
const Account = JSON.parse(localStorage.getItem("userAcount")) || [];
function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    Account.length > 0 && navigate("/dashboard");
  }, []);
  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
