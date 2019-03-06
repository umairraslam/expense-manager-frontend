import { authService } from '../services/authService';
import {showSuccess, hideSuccess, showError, hideError} from './snackbar';
import jwt from 'jsonwebtoken';
export const LOGIN = 'LOGIN';

function requestlogin() {
    return {
        type: LOGIN,
        isProcessing: true,
        isProcessed: false,
        token: '',
        user: {},
        message: ''
    };
}

function loginSuccess(token, user, message) {
    return {
        type: LOGIN,
        isProcessing: false,
        isProcessed: true,
        token: token,
        user: user,
        message: message
    };
}

function loginFailure(message) {
    return {
        type: LOGIN,
        isProcessing: false,
        isProcessed: true,
        token: '',
        user: {},
        message: message
    };
}


export function loginUser(creds) {
    return (dispatch) => {
        dispatch(requestlogin(creds));
        authService.login(creds.email, creds.password).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    localStorage.setItem('token', json.token);
                    jwt.verify(json.token, process.env.REACT_APP_JWT_SECRET, function (err, decoded) {
                        //socketIo.connectToServer(decoded.user.id);

                        //decoded.user.image = json.image;
                        dispatch(loginSuccess(json.token, decoded, json.message));
                        dispatch(showSuccess());
                    });
                });

            } else {
                response.json().then((json) => {
                    dispatch(loginFailure(json.message))
                    dispatch(showError());
                });
            }
        }).catch((error) => {
            dispatch(loginFailure(error.message));
            dispatch(showError());
        })
    }
}
