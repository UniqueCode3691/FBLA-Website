import React from "react";
import gymImage from "../../assets/gym.png"
import moneyImage from "../../assets/piggy-bank.png"
import clockImage from "../../assets/clock.png"
import dateImage from "../../assets/date.png"
import { Link } from "react-router-dom";

export default function Event({ event_date="January 1, 2025", event_time="3:00 PM EST", event_image=gymImage, event_cost="$5.00", event_name="Rec. Volleyball Game" }) {
    return(
        <div className="flex w-75 sm:w-150 h-60 sm:h-75 mx-1 sm:mx-10 my-10">
            <div className="bg-mapletan w-50 sm:w-100 h-full rounded-l-xl">
                <p className="ml-3 sm:ml-7 mt-3 sm:mt-7 text-xl sm:text-3xl font-bold">{event_name}</p>
                <p className="ml-3 sm:ml-8 text-sm sm:text-lg">MRHS Gymnasium</p>
                <hr className="mx-auto w-45 sm:w-90 mt-2" />
                <p><img className="ml-2 sm:ml-4 my-4 sm:my-3 mr-2 w-5 sm:w-9 inline" src={dateImage} alt="Date image" /><span className="font-bold">Date: </span> {event_date} </p>
                <p><img className="ml-1 sm:ml-2 my-4 sm:my-3 w-7 mr-1 sm:mr-0 sm:w-13 inline" src={clockImage} alt="Clock image" /><span className="font-bold">Time: </span> {event_time}</p>
                <p><img className="ml-3 sm:ml-4.5 my-4 mr-3 w-4 sm:w-8 inline" src={moneyImage} alt="Date image" /><span className="font-bold">Cost: </span> {event_cost}</p>

            </div>
            <div className="bg-gray-200 w-25 sm:w-50 h-full rounded-r-xl overflow-hidden">
                <img className="h-full object-cover rounded-r-xl" src={event_image} alt="Event Image" />
                <button className="absolute -mt-12 sm:-mt-15 ml-1 sm:ml-15 rounded-xl p-2 font-bold bg-maplebrown border-2 border-maplegreen">Buy Now</button>
            </div>
        </div>
    )
}