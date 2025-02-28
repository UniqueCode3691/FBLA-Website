import Header from './components/Header.jsx';
import gymImage from "../assets/gym.png"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-90 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-90 bg-black opacity-60"></div>
                    <h1 className="relative top-0 right-0 h-90 text-5xl -mt-80 text-center font-bold text-maplegreen">MRHS ARENA</h1>
                    <p className="relative top-0 right-0 -mt-60 text-center text-xl text-white ">Boasting 3,500 seats, Maple Ridge Arena is the perfect venue for sports, shows, and more. <span className="font-bold">Book a reservation for your event today!</span></p>
                    <Link className="relative top-0 right-0 mt-1 sm:mt-15 py-1 px-3 bg-maplegreen rounded-xl border-4 border-mapleorange hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 text-white text-xl" to="/rentals">RENTALS & DATES</Link>
                </div>
            </div>
        </>
    )
}