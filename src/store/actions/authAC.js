import * as actionTypes from './actionTypes';
import axios from 'axios';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId:userId
    };
};

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

const checkAuthTimeout = (expirationTime)=> {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
}

export const auth = (username, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            UserName: username,
            Password: password
        };
        let url= 'https://localhost:44340/Api/UserAccount/RegisterUser';

        if(!isSignUp){
            url= 'https://localhost:44340/Api/UserAccount/ValidateUser';
        }

        console.log(authData);
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess((2014+Math.random() * (3.25)), username));
                dispatch(checkAuthTimeout(60000));
            }
            )
            .catch(err => {
                console.log(err);
                alert(err.response.data.Message);
                dispatch(authFail(err.response.data.message));
            })
    }
}

export const setAuthRedirectPath = (path)=> {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
}