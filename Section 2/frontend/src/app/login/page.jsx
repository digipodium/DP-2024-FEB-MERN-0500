import React from 'react';
import classes from './login.module.css'

const Login = () => {
    return (
        <div>
            <h2 className='text-center'>Login</h2>
            <button className={classes.myBtn}>Submit</button>
            <button className='my-btn'>Login Now</button>
        </div>
    )
}

export default Login;