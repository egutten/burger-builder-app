import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) //returns an array of ingredient names, where it is coming in as an object.
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/> 
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el) 
    }, []);
    //igKey is the ingredient name, and i is the amount of that ingredient.
    //reduce flattens the array to combine all four arrays into one. The arr is the accumulator (empty array), and the el is the current value of each item we want to put into the accumulator. Return the accumulator array.
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
