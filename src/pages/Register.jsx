import "../App.css";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "../components/RegisterForm";
import Users from "../api/User";

const RegisterScreen = () => {
  useEffect(() => {
    const loadAll = async () => {
      let users = await Users.getAll();
      console.log(users);
    };

    loadAll();
  }, []);
  return (
    <div className="App">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterScreen;
