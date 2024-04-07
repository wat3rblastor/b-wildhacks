"use client";

import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";

export default function Home() {
  const [loggedIn, setloggedIn] = useState(true);
  const [isCusstomer, setisCustomer] = useState(false);

  return (
    <>
      <Body loggedIn={loggedIn} />
      <Footer />
    </>
  );
}
