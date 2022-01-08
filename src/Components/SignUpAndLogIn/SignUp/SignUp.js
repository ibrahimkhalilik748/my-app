import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const user = {
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password
        };

        const url = `http://localhost:5000/user/signup`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                console.log('server side response', res)
                window.location.href = "/login"
            })
        // e.target.reset()
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} type="name" placeholder="name" /><br />
                <input {...register("username", { required: true })} type="name" placeholder="username" /><br />
                <input {...register("email", { required: true })} type="email" placeholder="email" /><br />
                <input {...register("password", { required: true })} type="password " placeholder="password" /><br />
                <input type="submit" />
            </form>
            <Link to="/login">Already have a Account?</Link>
        </div>
    );
};

export default SignUp;