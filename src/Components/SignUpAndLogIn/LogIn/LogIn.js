import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const LogIn = () => {
    const [userDetails, setUserDetails] = useContext(userContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const user = {
            email: data.email,
            password: data.password

        };
        // const {email, password} = user;
        // const userDetails = {email, password};
        setUserDetails(user);

        const url = `http://localhost:5000/user/login`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + data.token
            },
            body: JSON.stringify(user)
        })

            .then(res => {
                console.log('server side response', res)
                // window.location.href = "/login"
            })
        // e.target.reset()
    };
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} type="email" placeholder="email" /><br />
                <input {...register("password", { required: true })} type="password " placeholder="password" /><br />
                <input type="submit" /><br />
                <Link to="">Forgotten password?</Link>
            </form>
            <br />
            <Link className="btn btn-success w-25" to="/signup">Create New Account</Link>
        </div>
    );
};

export default LogIn;