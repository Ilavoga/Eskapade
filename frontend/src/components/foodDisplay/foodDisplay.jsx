import React, { useContext } from 'react';
import './foodDisplay.css'
import { storeContext } from '../../context/storeContext';


const FoodDisplay = ({category}) => {

      const context = useContext(storeContext)

  return (
    <div className="food-display" id="food-display">
       <h2>Top dishes near you </h2>
    </div>
  );
};

export default FoodDisplay;
