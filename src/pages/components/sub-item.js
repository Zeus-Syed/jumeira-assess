import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
  import "./sub-item.css";
import FoodItem from "../components/foodItem";
import { apiOut } from "../../../src/apiOut";

const SubMenu = ({ navigation, items }) => {
  const [menuItems, setMenuItems] = useState([]);
  console.log("items", items);
  useEffect(()=>{
    // const temp = apiOut;
    setMenuItems(items);
    console.log("items", items);
}, [])

 
  return (
    <>
      <div className="sub">
        <p style={{ marginTop: "25px", borderBottom: "1px solid black" }}>BREAKFAST</p>
        <p style={{ marginTop: "25px" }}>ALL DAY</p>
        <p style={{ marginTop: "25px" }}>DRINKS</p>
        <p style={{ marginTop: "25px" }}>DINNER</p>
      </div>
      <div className="sub">
        {
          menuItems.map((item, index) => {

            return (
              <div key={`sub-${index}`}>
              <h2 key={`menu-${index}`} style={{ borderBottom: "1px solid black", fontFamily: "Optima, sans-serif" }}>{item.menu_name}</h2>
              
              </div>
            )
          })
        }
      </div>
      {  menuItems.length > 0 &&
      <FoodItem  items={menuItems}/>
      }
    </>
  )
}

export default SubMenu;