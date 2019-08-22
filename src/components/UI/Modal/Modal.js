import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

//changed to a class component to use lifecycle hooks. (shouldcomponentupdate)

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  //basically, only render if the modal shows up
  
  componentDidUpdate () {
    console.log('[modal] will update');
  }
  
  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}
  

export default Modal;
