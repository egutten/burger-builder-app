import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    
    //eslint-disable-next-line
    for (let ingredientName in props.ingredients) {
      ingredients.push(
        {
          name: ingredientName, 
          amount: props.ingredients[ingredientName]
          }
        ); //the alternative to this method of turning ingredients into an array can be found in Burger.js
    }
    
    const ingredientOutput = ingredients.map(ig => {
      return <span 
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={ig.name}>{ig.name} ({ig.amount})</span>
      })
    
    return(
      <div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
      </div>
    );
}

export default order;
