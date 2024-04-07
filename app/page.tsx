"use client";

import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Home() {
  const [loggedIn, setloggedIn] = useState(true);
  const [isCustomer, setisCustomer] = useState(true);

  return (
    <>
      <Body loggedIn={loggedIn} isCustomer={isCustomer}/>
      <Footer />
    </>
  );
}
