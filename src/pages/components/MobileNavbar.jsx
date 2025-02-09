import { Link } from "react-router-dom"

export default function MobileNav() {
    return (
        <div className="flex sm:hidden justify-around justify-items-center items-center bg-maplegreen w-full h-20">
            <Link className="peer/bo text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/box-office">BOX OFFICE</Link>
            <Link className="peer/r text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/rentals">RENTALS</Link>
            <Link className="peer/a text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/athletics">ATHLETICS</Link>
            <Link className="peer/au text-sm sm:text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/about-us">ABOUT US</Link>
         </div>
    )
}