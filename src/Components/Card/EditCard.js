import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import './Card.css';


const EditCard = () => {
    const { _id } = useParams()

    const [card, setCard] = useState([])
    console.log(_id)

    useEffect(() => {
        fetch(`http://localhost:5000/todo/${_id}`)
            .then(res => res.json())
            .then(data => setCard(data.data))

    }, [_id])




    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const todo = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        const url = `http://localhost:5000/todo/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => {
                console.log('server side response', res)
                // window.location.href = "/"
            })
        e.target.reset()
    };
    return (
        <div>
            <h1>Edit Card</h1>
            {
                card?.map(card =>
                    <div>
                        <h1>{card.name}</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="input" {...register("name", { required: false })} type="name" defaultValue={card.name} /><br />
                            <input className="input" {...register("email", { required: false })} type="email" defaultValue={card.email} placeholder="email" /><br />
                            <input className="input" {...register("password", { required: false })} type="password" defaultValue={card.password} placeholder="password" /><br />
                            <input type="submit" />
                        </form>
                    </div>
                )
            }

        </div>
    );
};

export default EditCard;