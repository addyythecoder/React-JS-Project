import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginAsync, signInAsync } from "../Services/Action/auth";
import { Link, useNavigate } from "react-router";
import './SignIn.css';

const SignIn = () => {
    const dispatch = useDispatch()
    const {errMsg, user} = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const [signInInput, setSignInInput] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignInInput({
            ...signInInput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(signInAsync(signInInput))
    }

    const googleLogin = () => {
        dispatch(googleLoginAsync());
    }

    useEffect(()=> {
        if(user){
            navigate("/")
        }
    }, [user]);
    return (
        <>
        
        <div className="auth-container">
            <h2>Login Form</h2>
        {errMsg != "" ? <p>{errMsg}</p> : ""}
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" name="email" value={signInInput.email} onChange={handleChange} />
            <br />
            <br />
            <label>Password: </label>
            <input type="password" name="password" value={signInInput.password} onChange={handleChange}  />
            <br />
            <br />
            <button type="submit">SignIn</button>
        </form>
            <br />
            <button onClick={googleLogin} >Google SignIN</button>
            <br />
            <br />
        <p>Create New Account? <Link to={"/signup"}>SignUP</Link></p>
</div>

        </>
    )
}

export default SignIn;