import React from 'react';
import logoImage from "../../assets/mapleridge.png"
import menuImage from "../../assets/menu.svg"
import { Link } from "react-router-dom"

export default function Header() {
    
    const [isOpen, setIsOpen] = React.useState(false)
    const [isSpinning, setIsSpinning] = React.useState(false)

    function toggleNavbar() {
        setIsOpen(prevIsOpen => !prevIsOpen)
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 500);
    }

    console.log(isOpen)

    return (
        <>
            <div className="sticky top-0 z-100 flex align-items-center bg-black">
                <Link className="w-36 m-1" to="/home">
                    <img src={logoImage} alt="Maple Ridge High School Logo" className="transform transition-transform duration-300 ease-in-out hover:scale-110" />
                </Link>
                <h1 className="w-full justify-center text-left mt-1 text-[1.2rem] sm:m-0 sm:text-[4rem] p-6 font-bold text-white truncate">MAPLE RIDGE <span className="hidden sm:inline">BUCKS</span></h1>
                <button onClick={toggleNavbar} className={`cursor-pointer sm:hidden w-15 ${isSpinning ? 'animate-spin' : ''} transition-transform duration-1000 ease-in-out`}>
                    <img src={menuImage} alt="Menu Icon" />
                </button>
                <div className={`absolute right-0 top-20 w-full opacity-100 z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'hidden translate-x-full'}`}>
                    <div className="flex flex-col justify-end ml-auto sm:hidden justify-items-center items-center bg-mapletan w-8/10">
                        <Link className="p-5 text-lg font-bold hover:text-slate-600 active:underline transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110" to="/box-office">BOX OFFICE</Link>
                        <Link className="p-5 text-lg font-bold hover:text-slate-600 active:underline transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110" to="/rentals">RENTALS</Link>
                        <Link className="p-5 text-lg font-bold hover:text-slate-600 active:underline transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110" to="/about-us">ABOUT US</Link>
                    </div>
                </div>
            </div>
            <nav className="flex top-0 left-0">

                <div className="hidden sm:flex justify-around justify-items-center items-center bg-mapletan w-full h-20">
                    <Link className="text-lg font-bold hover:text-slate-600 active:underline transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110" to="/box-office">BOX OFFICE</Link>
                    <Link className="text-lg font-bold hover:text-slate-600 active:underline transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110" to="/rentals">RENTALS</Link>
                    <Link className="text-lg font-bold hover:text-slate-600 active:underline transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110" to="/about-us">ABOUT US</Link>
                </div>
            </nav>
        </>
    )
}