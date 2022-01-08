import React, { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import DP from '../images/blank-profile-picture.png';
import './Card.css';


const ShowCard = (props) => {
    const { name, email, password, _id } = props.card;
    // const { _id } = useParams()

    const [card, setCard] = useState([])
    console.log(_id)

    useEffect(() => {
        fetch(`http://localhost:5000/todo/${_id}`)
            .then(res => res.json())
            .then(data => setCard(data.data))

    }, [])

    function deleteUser(_id) {
        fetch(`http://localhost:5000/todo/${_id}`, {
            method: 'DELETE'
        })
    }

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



    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Update User</Popover.Header>
            <Popover.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" {...register("name", { required: false })} type="name" defaultValue={name}  placeholder="name"/><br />
                    <input className="input" {...register("email", { required: false })} type="email" defaultValue={email} placeholder="email" /><br />
                    <input className="input" {...register("password", { required: false })} type="password" defaultValue={password} placeholder="password" /><br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <div className="col-md-3">
                <div className="box">
                    <div className="img">
                        <img src={DP} alt="" />
                    </div>
                    <div className="text">
                        <p>Name: <b>{name}</b></p>
                        <p>Email: <b>{email}</b></p>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                <Button className="btn btn-primary">Edit</Button>
                            </OverlayTrigger>
                            {/* <Link className="btn btn-primary" to={"/edit/" + _id}>Edit</Link> */}
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <button onClick={() => deleteUser(_id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>
        //  const { name, email, password, _id } = props.card;
    );
};

export default ShowCard;