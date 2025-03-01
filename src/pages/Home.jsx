import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ballImage from '../assets/ball.jpg'
import gymImage from "../assets/gym.png"
import gameImage from "../assets/game.webp"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-90 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-90 bg-black opacity-60"></div>
                    <h1 className="relative top-0 right-0 h-90 text-5xl -mt-80 text-center font-bold text-maplegreen">MRHS ARENA</h1>
                    <p className="relative top-0 right-0 -mt-60 sm:mx-15 text-center text-xl text-white ">Boasting 3,500 seats, Maple Ridge Arena is the perfect venue for sports, shows, and more. <span className="font-bold">Book a reservation for your event today!</span></p>
                    <Link className="mb-2 relative top-0 right-0 mt-1 sm:mt-15 py-1 px-3 bg-maplegreen rounded-xl border-4 border-mapleorange hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 text-white text-xl" to="/rentals">RENTALS & DATES</Link>
                </div>
            </div>
            <div className="flex bg-amber-100">
                <div className="w-full flex flex-col items-center">
                    <h1 className="mt-10 sm:mt-25 text-5xl text-mapleorange font-bold">EVENTS</h1>
                    <p className="mt-5 mx-5 text-center text-xl sm:mx-15">Being home to the Maple Ridge Bucks, this stadium is bound for greatness, with or without the ball.<span className="font-bold"> Witness it for yourself by getting a ticket to one of our events!</span></p>
                    <Link className="mb-2 text-maplered text-xl mt-5 sm:mt-15 py-1 px-3 bg-mapletan rounded-xl border-4 border-mapleorange hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110" to="/box-office">BOOK A TICKET</Link>
                </div>
                <img src={ballImage} alt="Ball Image" className="hidden sm:block h-8/10 w-8/10 my-10 mr-10 rounded-2xl"/>
            </div>
            <div className="flex bg-maplebrown">  
                <img src={gameImage} alt="Ball Image" className="hidden sm:block h-8/10 w-8/10 my-10 ml-10 rounded-2xl"/>
                <div className="w-full flex flex-col items-center">
                    <h1 className="mt-10 sm:mt-25 text-5xl text-black font-bold">ABOUT US</h1>
                    <p className="mt-5 mx-5 text-center text-xl sm:mx-15">Our Bucks dominate the court in a multitude of sports such as basketball and volleyball. <span className="font-bold">Learn more about them.</span></p>
                    <Link className="mb-2 text-white text-xl mt-5 sm:mt-15 py-1 px-3 bg-maplegreen rounded-xl border-4 border-mapleorange hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110" to="/about-us">LEARN MORE</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}