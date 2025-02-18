import { Link } from "react-router-dom"

export default function MobileNav() {
    return (
        <div className="absolute right-0 w-full opacity-80">
            <div className="flex flex-col justify-end sm:hidden ml-auto justify-items-center items-center bg-mapletan w-8/10 h-full z-10 gap-20">
                <Link className="mt-3 peer/bo text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/box-office">BOX OFFICE</Link>
                <Link className="peer/r text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/rentals">RENTALS</Link>
                <Link className="peer/a text-lg min-w-30 font-bold hover:text-slate-600 active:underline" to="/athletics">ATHLETICS</Link>
                <Link className="peer/au text-lg mb-3 min-w-30 font-bold hover:text-slate-600 active:underline" to="/about-us">ABOUT US</Link>
            </div>
        </div>
    )
}