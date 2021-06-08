
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
  import { apiOut } from "../../src/apiOut";
import "./menu.css";
import SubMenu from "./components/sub-item";

const Menu  = ({ navigation }) => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

  useEffect(async () => {

    await getData();
    // updateData();
  }, [])


  async function getData() {
    const response = await fetch("https://dh-dev-apim.azure-api.net/restaurants/info/v1/QA-SUGARMASH/menu", {
      method: "GET",
      headers: new Headers({
        "Ocp-Apim-Subscription-Key": "c5f67862202f4577ab36a72ad04b38ca"
      })
    });
    //  setData(temp);
    var body = await response.json();
    console.log("results", body);
    setLocation(body.info.restaurant_location);
    setData(body.menu);
  }


  const updateData = async () => {
    const temp = apiOut;
    setLocation(temp.info.restaurant_location);
    setData(temp.menu);
    console.log("apiRes", temp);
  }

  return (
    <div>
      <div style={{ paddingTop: "145px" }}>
        <p style={{ color: "white", fontSize: "18px" }}>{location}</p>
        <p style={{ color: "white", fontSize: "50px", fontFamily: "Optima, sans-serif" }}>In Room Dining</p>
      </div>
      <div>
        {data.length > 0 &&
          <SubMenu items={data} />
        }
      </div>
    </div>
  )
}

export default Menu;