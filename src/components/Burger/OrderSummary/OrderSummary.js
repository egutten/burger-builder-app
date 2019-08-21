import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

//turned into a class component to be able to use lifecycle hooks for testing purposes (otherwise it could be a functional component).

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] Will update')
  }
  //whether or not this is rendered is controlled by the modal, as it is wrapped in the modal.
  
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
            {this.props.ingredients[igKey]}
          </li> );
      });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button> 
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> 
      </Aux>
    );
  }
}


export default OrderSummary;
