import React,{useRef} from 'react';
import instagram_post from '../images/facebook.svg';
import Card from './Cards'
import { card1, card2, card3, card4, card5, card6 } from '../data'
// import scrollIntoView from 'scroll-into-view-if-needed'

const Plans = () => {
    // const cardRef = useRef()
    // const servicesId = document.querySelector('plans');
 
    // const message = () => {
    //    console.log(cardRef);
    //    cardRef.scrollIn;
    // //    scrollIntoView(cardRef, {
    // //     behavior: 'smooth',
    // //     scrollMode: 'if-needed',
    // //   });


    return (
        <>
           
            <div id='plans_whole'>
              <div className='container'>  
            <div className="card m-3 shadow-lg text-center animated hire399">
                <div className="card-body">
                   <h1>Hire your own Social Media agent for just $399/month!</h1> 
                </div>
            </div>
            </div>
                <div  className='container' id='plans'>
                    
                    <div className='row '>
                        <div className="card-group" >
                            <Card {...card1} />
                            <Card {...card2} />
                            <Card{...card3} />
                        </div>
                    </div>
                </div>
                <div   className='container' id='plans'>
                    <div  className='row '>
                        <div  className="card-group" >
                            <Card  {...card4} />
                            <Card {...card5} />
                            <Card{...card6} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )};

    
export default Plans;