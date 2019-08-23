import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }
  
  UNSAFE_componentWillMount () {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
       if (param[0] === 'price') {
         price = param[1];
       } else {
         ingredients[param[0]] = +param[1] //adds the ingredients to the object; the +makes it a number
       }
    }
    this.setState({ingredients: ingredients, totalPrice: price});
  }
  
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }
  
  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'} 
        render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>)} />  
      </div>
    );
  }
}
 //we rendered the contactdata form in that route so that we could pass the ingredients and price props to it.

export default Checkout;
