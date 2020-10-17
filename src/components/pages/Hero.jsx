import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'



const Hero = ({
    Brand_slogan,
    Brand_name,
    description,
    image,
    imgStart
}

) => {
   
    useEffect(()=> {  Aos.init({duration:1500})},[]);
    return (
        <>
        <div className='d-flex align-items-center ' id='header'  >
            
            
                <div className='container-fluid nav-bg'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                        
                            <div data-aos='fade-down' className='col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                                <h1>{Brand_slogan}  <strong className='brand-name'>{Brand_name}</strong></h1>
                                <h2 className='my-3'> {description}</h2>
                                <div className='mt-3'>
                                    <NavLink to="/" type='button' className='btn btn-lg btn-join-us'>join us</NavLink>

                                </div>
                            </div>
                            <div data-aos='fade-down' className='col-md-6 col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column '>
                                <img src={image} className='image-fluid animated' alt={Brand_name} />
                            </div>
                            
                        </div>


                    </div>
                </div>
                </div>
                
        </>
    );
};

export default Hero