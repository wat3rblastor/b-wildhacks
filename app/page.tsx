"use client";

import { useState } from "react";
import Body from "./Body";

export default function Home() {
  const [loggedIn, setloggedIn] = useState(false);
  const [isCusstomer, setisCustomer] = useState(true);

  return (
    <Body loggedIn={loggedIn}/>
  );
}
