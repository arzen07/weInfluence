import React, { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { withRouter } from 'react-router-dom';
import instagram_post from '../images/gore.jpg';
import ReactCardFlip from 'react-card-flip'



const Cards = ({
    image,
    card_title,
    description,
    style,
    price,
    point1,
    point2,
    point3


}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>

            <div className='col-lg-4 col-md-4 col-sm-12 ' id='card-container' >
                <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>

                    <div className="card m-3 shadow-lg" style={style} >
                        <img src={image} className="card-img-top card-image " alt={card_title} />
                        <div className="card-body">
                            <h5 className="card-title text-center"><strong>{card_title}</strong></h5>
                            <h3 className="card-text text-center price realistic-marker-highlight" >{price}</h3>
                            <p className="card-text">
                                <ul>
                                    <li>{point1}</li>
                                    <li>{point2}</li>
                                    <li>{point3}</li>
                                </ul>
                            </p>
                            <button className="btn btn-primary" onClick={handleClick}>Learn More</button>
                        </div>
                    </div>



                    <div className="card m-3 shadow-lg" style={style} >


                        <div className="card-body">
                            <h5 className="card-title text-center"><strong>{card_title}</strong></h5>
                            <h3 className="card-text text-center price" >$599</h3>
                            <p className="card-text">{description}</p>
                            <button className="btn btn-primary" onClick={handleClick}>Go back</button>
                        </div>
                    </div>

                </ReactCardFlip>
            </div>

        </>
    );
};

export default Cards;