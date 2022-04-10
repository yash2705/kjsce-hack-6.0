import React from "react";
import { useMoralis } from "react-moralis";

const Home = () => {
  const { logout } = useMoralis();
  return <div onClick={logout}>Logout</div>;
};

export default Home;
