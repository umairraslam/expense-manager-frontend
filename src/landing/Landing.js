import React from 'react';
import Button from '@material-ui/core/Button';
import {logoutUser} from '../actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Landing extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        console.log("logout")
        this.props.dispatch(logoutUser());
    }
    render(){
        return(
            <div>
                Login Successful!
                <Button variant="contained" size="large" color="primary" onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      showSuccessSnackbar: state.snackbar.showSuccessSnackbar,
      showErrorSnackbar: state.snackbar.showErrorSnackbar,
      message: state.snackbar.message,
    };
  }
  
export default withRouter(connect(mapStateToProps)(Landing));
