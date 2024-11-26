import React, { useContext } from 'react'
import './foodDisplay.css'
import { storeContext } from '../../context/storeContext'
import FoodItem from '../foodItem/foodItem'
import { food_list } from '../../assets/frontend_assets/assets';

const FoodDisplay = ({category}) => {

      const context = useContext(storeContext)

  return (
    <div className="food-display" id="food-display">
       <h2>Top dishes near you </h2>
       <div className="food-display-list">
         {food_list.map((item,index)=>{
          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
         })}
       </div>
    </div>
  );
};

export default FoodDisplay;
