import React from 'react';
import {servicesobj} from '../data'
import Hero from './Hero'


const Services = () => {
    return(
        <>
        <div id='services'>
        <Hero {...servicesobj}/>
        </div>
        </>
    );
};

export default Services;