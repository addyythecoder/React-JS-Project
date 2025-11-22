import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../Services/Action/auth";
import { Link, useNavigate } from "react-router";
import './SignUp.css';

const SignUp = () => {
    const dispatch = useDispatch()
    const {isCreated, errMsg} = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const [signupInput, setSignUpInput] = useState({
        email: "",
        password: "",
        cpassword: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpInput({
            ...signupInput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(signupInput.password == signupInput.cpassword){
            // console.log(signupInput);
            dispatch(signUpAsync(signupInput))
        }
    }

    useEffect(()=> {
        if(isCreated){
            navigate("/signin")
        }
    }, [isCreated])
    return (
        <>
        

        <div className="auth-container"><h2>Register Form</h2>
        {errMsg != "" ? <p>{errMsg}</p> : ""}
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" name="email" value={signupInput.email} onChange={handleChange} />
            <br />
            <br />
            <label>Password: </label>
            <input type="password" name="password" value={signupInput.password} onChange={handleChange}  />
            <br />
            <br />
            <label>Confirm Password: </label>
            <input type="password" name="cpassword" value={signupInput.cpassword} onChange={handleChange} />
            <br />
            <br />
            <button type="submit">Sign Up</button>
        </form>
        <p>Already an Account? <Link to={"/signin"}>SignIN</Link></p>
</div>

        </>
    )
}

export default SignUp;