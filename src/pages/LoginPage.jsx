import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LOGIN/LoginForm";
import { Account } from "../Authentication/Auth";
function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    Account.loggedIn && navigate("/dashboard");
  }, []);
  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
