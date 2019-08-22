import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component { //class is not named because this function creates the classes below.
    state = {
      error: null
    }
    
    constructor () { //changed this to constructor rather than componentDidMount because we neeeded to catch the errors earlier in the process.
      super()
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
          this.setState({error: error})
      });
    }
    
    componentWillUnmount() { //executed when a component isnt required anymore; used here to get rid of dead interceptors when we get rid of the burger builder.
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    
    errorConfirmedHandler = () => {
      this.setState({error: null})
    }
    
    render () {
      return (
        <Aux>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>  
      );
    }
  }  
}

export default withErrorHandler;
