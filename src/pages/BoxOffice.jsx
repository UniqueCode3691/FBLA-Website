import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import gymImage from "../assets/gym.png"

export default function BoxOffice() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-50 bg-black opacity-60"></div>
                    <h1 className="relative top-0 right-0 h-90 text-5xl -mt-30 text-center font-bold text-maplegreen">RENTALS</h1>
                    <p className="relative top-0 right-0 -mt-75 sm:mx-15 text-center text-xl font-bold text-white ">Book a date on the calendar below!</p>
                </div>
            </div>
            <Footer />
        </>
    )
}