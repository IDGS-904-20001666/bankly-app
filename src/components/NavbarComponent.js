import React from 'react'
import { NavLink } from 'react-router-dom'
import { LogoComponent } from './LogoComponent'

export const NavbarComponent = () => 
{
    return (
        <div className="navbar bg-base-100 xl:px-10 fixed top-0 w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink exact="/services" to="/services">Servicios</NavLink>
                        </li>
                        <li>
                            <NavLink exact="/about_us" to="/about_us">Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact_us">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <LogoComponent width={130}/>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about_us">Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact_us">Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
