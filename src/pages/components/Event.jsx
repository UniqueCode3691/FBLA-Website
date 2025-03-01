import React from "react";
import gymImage from "../../assets/gym.png"
import { Link } from "react-router-dom";

export default function Event({ seating="Open", date="January 1, 2025", time="3:00 PM EST", event_image=gymImage, event_cost="$5.00", event_duration="1h 30m", event_name="New Event XYZZZ" }) {
    return(
        <div className="flex flex-col w-60 sm:w-70 sm:h-130 bg-mapletan rounded-xl my-10 mx-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img src={event_image} alt="Image of the event" className="rounded-t-xl h-40" />
            <div className="text-center mt-5">
                <p className="text-2xl font-bold">{event_name}</p>
                <p className="text-lg mt-2"><span className="font-bold">Duration:</span> {event_duration}</p>
                <p className="text-lg mt-2"><span className="font-bold">Time:</span> {time}</p>
                <p className="text-lg mt-2"><span className="font-bold">Date:</span> {date}</p>
                <p className="text-lg mt-2"><span className="font-bold">Duration:</span> {event_duration}</p>
                <p className="text-lg mt-2"><span className="font-bold">Cost:</span> {event_cost}</p>
                <p className="text-lg mt-2 mb-3"><span className="font-bold">Seating:</span> {seating}</p>
                <button className="py-1 px-2 bg-maplebrown font-bold rounded-xl border-maplegreen border-4 transition-transform duration-300 ease-in-out transform hover:scale-115"><a href="https://www.ticketmaster.com/">BUY NOW</a></button>
            </div>
        </div>
    )
}