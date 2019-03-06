import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInForm from './SignInForm';
import { loginUser } from '../actions/auth';
import CustomizedSnackBars from '../reusable/snackbar/CustomizedSnackbars';
import {hideSuccess, hideError} from '../actions/snackbar';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);

    }

    doLogin(values) {
        console.log(values)
        this.props.dispatch(loginUser({ email: values.email.toString().toLowerCase(), password: values.password }));
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
            </Typography> */}
                    <SignInForm onSubmit={this.doLogin} />
                </Paper>
                <CustomizedSnackBars
                    close={setTimeout(() => { this.props.dispatch(hideSuccess()) }, 3000)}
                    variant={"success"}
                    Message={this.props.message}
                    open={this.props.showSuccessSnackbar} />
                <CustomizedSnackBars
                    close={setTimeout(() => { this.props.dispatch(hideError())  }, 3000)}
                    variant={"error"}
                    Message={this.props.message}
                    open={this.props.showErrorSnackbar} />
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
    return {
        isProcessing: state.auth.isProcessing,
        isProcessed: state.auth.isProcessed,
        token: state.auth.token,
        user: state.auth.user,
        showSuccessSnackbar: state.snackbar.showSuccessSnackbar,
        showErrorSnackbar: state.snackbar.showErrorSnackbar,
        message: state.auth.message
    };
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(SignIn)));
