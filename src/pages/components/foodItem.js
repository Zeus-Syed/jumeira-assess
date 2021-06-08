import React, { useState, useEffect } from 'react';


const FoodItem = ({ navigation, items }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodItemsToDisplay, setFoodItemsToDisplay] = useState([]);
  const [indexCss, setIndexCss] = useState(0);

  useEffect(()=>{
    
    setFoodItems(items[0].menu_sections[0].menu_categories);
    setFoodItemsToDisplay(items[0].menu_sections[0].menu_categories[0].items);
    
}, [])


const updateItems = (items, index) => {
   console.log("displayItem", items)
   setFoodItemsToDisplay(items);
   setIndexCss(index);
}
 
  return (
     <>
          <div className="sub">
              {
                  foodItems.map((item, index) => {

                      return (
                          <p key={`menu-${index}`} style={{ cursor: "pointer",marginTop: "25px", fontSize: "22px", borderBottom: indexCss == index ? "1px solid black" : null }} onClick={() => updateItems(item.items, index)}>{item.name}</p>
                      )
                  })
              }
          </div>
          <div className="displayItem">
              {foodItemsToDisplay.length > 0 &&
                  foodItemsToDisplay.map((item, index) => {

                      return (
                          <div key={`display-${index}`}>
                              <div className="displayView">
                                  <img src={item.image} alt={item.name} width="190" height="120"></img>
                                  <div style={{ marginLeft: "10px" }}>
                                      <p key={`display-${index}`} style={{ fontWeight: "bold" }}>{item.name}</p>
                                      <p style={{ fontStyle: "italic" }}>AED {item.price}</p>
                                      <p style={{ fontStyle: "italic", color: "#C4A484" }}>{item.description}</p>
                                  </div>
                              </div>
                              <hr style={{ marginLeft: "10px", marginRight: "10px" }} />
                          </div>

                      )
                  })
              }
          </div>
      </>
  )
}

export default FoodItem;