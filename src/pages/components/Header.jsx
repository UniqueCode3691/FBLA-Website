import React from 'react';
import logoImage from "../../assets/mapleridge.png"
import menuImage from "../../assets/menu.svg"
import { Link } from "react-router-dom"
import MobileNav from './MobileNavbar'

export default function Header(props) {
    
    const [isOpen, setIsOpen] = React.useState(false)

    function toggleNavbar() {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    console.log(isOpen)

    return (
        <nav className="top-0 left-0">
            <div className="flex align-items-center bg-maplegreen">
                <Link className="w-36" to="/home">
                    <img src={logoImage} alt="Maple Ridge High School Logo" />
                </Link>
                <h1 className="w-full justify-center text-center mt-1 text-[1.2rem] sm:m-0 sm:text-[4rem] p-6 text-white truncate">MAPLE RIDGE <span className="hidden sm:inline">BUCKS</span></h1>
                <button onClick={toggleNavbar} className="cursor-pointer sm:hidden w-15">
                    <img src={menuImage} alt="Menu Icon" />
                </button> 
            </div>
            {isOpen && <MobileNav />}

            <div className="hidden sm:flex justify-around justify-items-center items-center bg-mapletan w-full h-20">
            
                <Link className="peer/bo text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/box-office">BOX OFFICE</Link>
                <Link className="peer/r text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/rentals">RENTALS</Link>
                <Link className="peer/a text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/athletics">ATHLETICS</Link>
                <Link className="peer/au text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/about-us">ABOUT US</Link>
            </div>
        </nav>
    )
}