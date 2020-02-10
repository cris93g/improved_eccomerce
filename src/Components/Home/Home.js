import React, { useEffect, useState } from "react";
import All_items from "./All_items";
import axios from "axios";
import Auth from "../auth/Auth";
const Home = () => {
  const [items, set_items] = useState([]);
  console.log(items);

  return (
    <div>
      <Auth />
      <p>Home</p>
      <All_items />
    </div>
  );
};

export default Home;
