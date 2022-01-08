import React from 'react';
import { useForm } from "react-hook-form";
import'./Card.css';


const AddCard = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const todo = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        const url = `http://localhost:5000/todo`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => {
                console.log('server side response', res)
            })
            e.target.reset()
    };
    return (
        <div>
            <h1>Add Card</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} type="name"  placeholder="name" /><br />
                <input {...register("email", { required: true })} type="email" placeholder="email" /><br />
                <input {...register("password", { required: true })} type="password "  placeholder="password" /><br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddCard;