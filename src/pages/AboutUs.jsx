import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import gymImage from "../assets/gym.png"

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-50 bg-black opacity-60"></div>
                    <h1 className="relative top-0 right-0 h-90 text-5xl -mt-30 text-center font-bold text-maplegreen">About Us</h1>
                    <p className="relative top-0 right-0 -mt-75 sm:mx-15 text-center text-xl font-bold text-white ">Give us a call from 8a.m. to 6p.m. from Monday to Saturday</p>
                </div>
            </div>
            <div className="text-center text-xl bg-mapletan h-full pt-10">
                <h1 className="font-bold text-2xl text-maplebrown">Our Mission:</h1>
                <p className="sm:mx-15">MRHS Gymnasium is a newly opened project that hopes to raise funding for our Bucks, provide entertainment, and serve as a central hub for events in our local community in Maple Ridge.</p>
                <h1 className="font-bold text-2xl text-maplebrown pt-20">Contact Us:</h1>
                <p className="sm:mx-15">Call us at 111-111-1111 or shoot us an email at <a className="text-maplegreen font-bold underline" href="mailto:donotemailthisemail@mrhs.org">donotemailthisemail@mrhs.org.</a></p>
                <h1 className="font-bold text-2xl text-maplebrown pt-20">Location:</h1>
                <p className="sm:mx-15 pb-10">Maple Ridge High School is located in the humble city of Ridgewood. Drop by <span className="underline font-bold">713 Maple Rd. 18782, Ridgewood</span> to take a look at our gymnasium before you book it!</p>
            </div>
            <Footer />
        </>
    )
}