import React from "react";
import { PropertiesList } from "../sections/PropertiesList/PropertiesList";
import { propertiesList } from "../data";
import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // handle login logic
    // on success -> redirect home page
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  
  return (
    <Layout>
      <Button onClick={handleLogin} title="Login" />
    </Layout>
  );
};
