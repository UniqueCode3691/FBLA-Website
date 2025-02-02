import React from 'react';
import logoImage from "../../assets/mapleridge.png"
import leafImage from "../../assets/leaf.svg"
import { Link } from "react-router-dom"

export default function Header(props) {
    
    const [isOpen, setIsOpen] = React.useState(true)

    function toggleNavbar() {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }
    return (
        <nav className="top-0 left-0">
            <div className="flex align-items-center bg-maplegreen">
                <Link className="w-36" to="/">
                    <img src={logoImage} alt="Maple Ridge High School Logo" />
                </Link>
                <h1 className="bg-maplered w-full justify-center text-center text-[1.5rem] md:text-[4rem] p-6 text-white truncate">MAPLE RIDGE BUCKS</h1>
            </div>
            <div className="flex justify-around justify-items-center items-center bg-mapletan w-full h-20">
            
                <Link className="peer/bo text-sm md:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/box-office">BOX OFFICE</Link>
                <Link className="peer/r text-sm md:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/rentals">RENTALS</Link>
                <Link className="peer/a text-sm md:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/athletics">ATHLETICS</Link>
                <Link className="peer/au text-sm md:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/about-us">ABOUT US</Link>
            </div>
        </nav>
    )
}