import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../config/firebase.config";


export const signupSuc = () => {
    return {
        type: "SIGNUP_SUC"
    }
}

export const signuprej = (msg) => {
    return {
        type: "SIGNUP_REJ",
        payload: msg
    }
}

export const loginSuccess = (user) => {
    return {
        type: "LOGIN_SUC",
        payload: user
    }
}
export const loginReject = (msg) => {
    return {
        type: "LOGIN_REJ",
        payload: msg
    }
}

export const signoutSucc = () => {
    return {
        type: "LOGOUT_SUC"
    }
}

export const signoutRej = (msg) => {
    return {
        type: "LOGOUT_REJ",
        payload: msg
    }
}


export const signUpAsync = (data) => {
    return  async dispatch => {
        try {
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                // console.log(res.user)
                dispatch(signupSuc())
            })
            .catch(err =>{
                dispatch(signuprej(err.message))
            });
        } catch (err) {
            console.log(err);
            dispatch(signuprej(err.message))
        }
    }
}


export const signInAsync = (data) => {
    return async dispatch => {
        try {
            signInWithEmailAndPassword(auth, data.email, data.password)
        .then((res)=> {
            console.log(res.user);
            dispatch(loginSuccess(res.user))
        })
        .catch((err)=> {
            console.log(err);
            dispatch(loginReject('Email & Password is Wrong'))
        })
        } catch (err) {
            console.log(err);
            dispatch(loginReject('Network Issue'))
        }
    }
}


export const signOutAync = () =>{
    return async dispatch => {
        try {
            signOut(auth).then(()=> {
                dispatch(signoutSucc())
            }).catch((err)=> {
                dispatch(signoutRej(err.message))
            })
        } catch (error) {
            console.log(err);
            dispatch(loginReject('Network Issue'))
        }
    }
}


export const googleLoginAsync = () => {
    return (dispatch) => {
        let provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((res)=> {
            console.log(res.user);
            dispatch(loginSuccess(res.user))
        })
        .catch((err)=> {
            console.log(err);
            dispatch(loginReject('Network Issue'))
        })
    }
}