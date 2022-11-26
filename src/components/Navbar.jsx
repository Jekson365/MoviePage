import React from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import { useState } from 'react';


export const Navbar = () => {
    const [active,setActive] = useState(false)
    return (
        <>
            <div className="container-fluid bg-dark d-flex align-items-center justify-content-between p-3">
                <h3 className='h3 ncolor'>Jekson365</h3>
                <nav className='d-flex ml-2 nv bg-dark' >
                    <li className='m-3 nav-item ncolor'>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className='m-3 nav-item ncolor'>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li className='m-3 nav-item ncolor'>
                        <Link to={"/Registration"}>Registration</Link>
                    </li>
                    <li className='m-3 nav-item ncolor'>
                        <Link to={"/discover"}>Discover</Link>
                    </li>
                </nav>
                <FaBeer className='ncolor close-icon' onClick={()=>setActive(!active)}/>
            </div>
        </>
    )
}
