import React from 'react';
import { connect } from "react-redux";
import userManager from './userManager';
import {withRouter} from "react-router-dom";

class CallbackComponent extends React.PureComponent {
 
  componentDidMount(){   
    userManager.signinRedirectCallback()
      .then((user) => this.onRedirectSuccess(user))
      .catch((error) => this.onRedirectError(error));    
  }

  onRedirectSuccess = (user) => {
    this.props.history.push("/");
  };

  onRedirectError = (error) => {
    this.props.history.push("/");
  };

  render() {
    return (<div>Redirecting...</div>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(withRouter(CallbackComponent));