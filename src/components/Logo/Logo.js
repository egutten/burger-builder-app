import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
      <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;

//The style=props.height above could have been used in the toolbar and sidedrawer to dynamically adjust the height. In those files, you would simply set the prop height to whatever value you needed. Instead, we decided to wrap the logo in a div and then set Logo classes for the toolbar and sidedrawer.
