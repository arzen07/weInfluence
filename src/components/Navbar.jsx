import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import banner from './images/logo.jpeg'



function Navbar() {

    const[navbar, setNavbar]=useState(false)
    
    const changeBackground=()=>{
        if (window.scrollY >=10){
        setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }


    window.addEventListener('scroll',changeBackground);
    return (
        
            <div className='container-fluid nav_bg'>
                <div className='row'>
                     <nav className={navbar ? "navbar navbar-expand-lg fixed-top navbar-active " :"navbar navbar-expand-lg fixed-top " }>
                        <div className='col-10 mx-auto'>
                            <div className="container-fluid">
                               
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <NavLink  className="navbar-brand " to="/">  </NavLink>
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink  exact className="nav-link hover" activeClassName='navbar-link-active' to="/">home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact className="nav-link  hover" activeClassName='navbar-link-active' to="/services">services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  exact className="nav-link  hover" activeClassName='navbar-link-active' aria-current="page" to="/plans">plans</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  exact className="nav-link  hover" activeClassName='navbar-link-active' to='/about'>about</NavLink>

                                        </li>
                                        
                                            
                                        
                                        
                                    </ul>
                                   
                                </div>
                            </div>
                            </div>
                        </nav>
                    
                </div>
            </div>
        
    )
}

export default Navbar
