import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
  import "./sub-item.css";
  import { apiOut } from "../../../src/apiOut";

const DisplayItem = ({ navigation, items }) => {
  const [displayItems, setDisplayItem] = useState([]);

  useEffect(()=>{
    //   const temp = apiOut;
      setDisplayItem(items)
}, [])

 
  return (
  
      <div className="displayItem">
          {
              displayItems.map((item, index) => {

                  return (
                      <div key={`display-${index}`}>
                          <div className="displayView">
                              <img src={item.image} alt={item.name} width="190" height="120"></img>
                              <div style={{ marginLeft: "10px"}}>
                                  <p key={`display-${index}`} style={{ fontWeight: "bold"}}>{item.name}</p>
                                  <p style={{ fontStyle: "italic"}}>AED {item.price}</p>
                                  <p style={{ fontStyle: "italic", color: "#C4A484"}}>{item.description}</p>
                              </div>
                          </div>
                          <hr style={{ marginLeft: "10px", marginRight: "10px"}}/>
                      </div>

                  )
              })
          }
      </div>
      
  )
}

export default DisplayItem;