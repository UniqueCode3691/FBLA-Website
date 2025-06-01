import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import gymImage from "../assets/gym.png";
import Event from "./components/Event.jsx";
import React from "react";
import gameImage from "../assets/game.webp";
import showImage from "../assets/show.jpg";
import trumpImage from "../assets/trump.webp";
import vbImage from "../assets/vb.jpg";
import willImage from "../assets/will smith.webp";
import arrowImage from "../assets/arrow.svg";

const events = [
    { event_date:'March 11', event_time:'6:00 PM EST', event_image:gameImage, event_cost:'$0.00', event_name:'Varsity Basketball' },
    { event_date:'September 25', event_time:'5:30 PM EST', event_image:willImage, event_cost:'$150.00', event_name:'Will Smith B-Day' },
    { event_date:'June 16', event_time:'7:00 PM EST', event_image:showImage, event_cost:'$2.00', event_name:'School Talent Show' },
    { event_date:'March 1', event_time:'4:00 PM EST', event_image:vbImage, event_cost:'$20.00', event_name:'Rec. Volleyball Game' },
    { event_date:'April 10', event_time:'2:00 PM EST', event_image:trumpImage, event_cost:'$500.00', event_name:'Presidential Visit' },
];

const filter = "Filter";

export default function BoxOffice() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-60 sm:h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-60 sm:h-50 bg-black opacity-60"></div>
                    <h1 className="absolute mt-10 text-5xl text-center font-bold text-maplegreen">BOX OFFICE</h1>
                    <p className="absolute mt-35 p-2 mb-10 sm:mt-30 text-center text-l sm:text-xl font-bold text-white">Browse tickets for a variety of events ranging from sports to concerts.</p>
                </div>
            </div>
            <button className='mt-10 ml-1 sm:ml-10 bg-mapletan pl-2 pr-2 rounded-xl font-bold'>Sort By: {filter} <img className="pl-3 h-10 inline" src={arrowImage} alt="Dropdown Arrow" /></button>
            <div className='flex flex-col'>
                {events.map((event) => (<Event {...event} />))}
            </div>
            <Footer />
        </>
    )
}