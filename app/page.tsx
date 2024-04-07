"use client";

import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Home() {
  const [loggedIn, setloggedIn] = useState(false);
  const [isCustomer, setisCustomer] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  return (
    <>
      <Body loggedIn={loggedIn} isCustomer={isCustomer} handleLogin={handleLogin}/>
      <Footer />
      <button onClick={setloggedIn}> hi</button>
    </>
  );
}
