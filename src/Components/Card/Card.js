import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';
import AddCard from './AddCard';


const Card = () => {
    const [card, setCard] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/todo`)
            .then(res => res.json())
            .then(data => setCard(data.data))

    }, [card])
    return (
        <div>
            <h1>Card</h1>
            <div className="ShowCard">
            <div className="container">
                <div className="row">
                    {
                        card?.map(card => <ShowCard card={card}></ShowCard>)
                    }
                </div>
            </div>
            </div>
            <AddCard></AddCard>
        </div>
    );
};

export default Card;