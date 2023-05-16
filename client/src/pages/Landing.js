
import {Logo} from "../components"
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
    const { user } = useAppContext();
    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper>
                <nav>
                    <Logo />
                </nav>
                <div className='container page'>
                    {/*info*/}
                    <div className='Info'>
                        <h1>
                            Job <span>tracking</span> App
                        </h1>
                        <p>
                            Photo booth dreamcatcher echo park, venmo jianbing bruh small batch pour-over coloring book hot chicken beard everyday carry vaporware. Live-edge DSA iPhone raclette neutra pabst, slow-carb neutral milk hotel prism. Taiyaki plaid farm-to-table lumbersexual blackbird spyplane neutra, waistcoat selfies paleo ramps flannel crucifix kale chips iPhone. Fit tattooed kitsch fam vibecession JOMO.
                        </p>
                        <Link to='/register' className='btn btn-hero'>
                            Login/Register
                        </Link>
                    </div>
                    <img src={Main} alt='Main Image' className='img main-img'></img>
                </div>
            </Wrapper>
        </React.Fragment>    
    )
}

export default Landing