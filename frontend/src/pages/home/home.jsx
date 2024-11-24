import React from 'react';
import './home.css'
import Header from '../../components/header/header';
import ExploreMenu from '../../components/exploreMenu/exploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/foodDisplay/foodDisplay';

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
