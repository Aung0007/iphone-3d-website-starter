

import React from 'react'
import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';

const Nav = () => {
    return (
        <>
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <ul className='list-styled'>
                        <li>
                            <img src={Logo} alt="Apple" />
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Store</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Mac</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>iPad</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>iPhone</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Watch</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>AirPods</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Tv & Home</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Entertainment</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Accessories</a>
                        </li>
                        <li>
                            <a href="" className='linke-styled'>Support</a>
                        </li>
                        <li>
                            <a href=""><img src={Search} alt="Search" /></a>
                        </li>
                        <li>
                            <a href="">
                            <img src={Store} alt="Store" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav