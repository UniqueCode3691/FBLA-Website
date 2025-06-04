import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import gymImage from "../assets/gym.png";
import Event from "./components/Event.jsx";
import React, { useState } from "react";
import gameImage from "../assets/game.webp";
import showImage from "../assets/show.jpg";
import trumpImage from "../assets/trump.webp";
import vbImage from "../assets/vb.jpg";
import willImage from "../assets/will smith.webp";
import arrowImage from "../assets/arrow.svg";

export default function BoxOffice() {
    var events = [
        { event_date:'March 11', event_time:'6:00 PM EST', event_image:gameImage, event_cost:'$0.00', event_name:'Varsity Basketball' },
        { event_date:'September 25', event_time:'5:30 PM EST', event_image:willImage, event_cost:'$150.00', event_name:'Will Smith B-Day' },
        { event_date:'June 16', event_time:'7:00 PM EST', event_image:showImage, event_cost:'$2.00', event_name:'School Talent Show' },
        { event_date:'March 1', event_time:'4:00 PM EST', event_image:vbImage, event_cost:'$20.00', event_name:'Rec. Volleyball Game' },
        { event_date:'April 10', event_time:'2:00 PM EST', event_image:trumpImage, event_cost:'$500.00', event_name:'Presidential Visit' },
    ];

    const filterOps = [
        {
            id: 0,
            label: "Filter",
            value: "filter"
        },
        {
            id: 1,
            label: "Title",
            value: "title"
        },
        {
            id: 2,
            label: "Cost",
            value: "cost"
        },
        {
            id: 3,
            label: "Time",
            value: "time"
        },
        {
            id: 4,
            label: "Date",
            value: "date"
        }
    ];
    

    const [filter, setFilter] = React.useState(filterOps[0]);
    const [dropdown, setDropdown] = React.useState(false);

    if (filter.value == "title") {
        events.sort((a, b) => {
            return a.event_name.localeCompare(b.event_name)
        })
    }   else if (filter.value == "cost") {
        events.sort((a, b) => {
            const numA = parseFloat(a.event_cost.replace('$', ''));
            const numB = parseFloat(b.event_cost.replace('$', ''));
            return numA - numB;
        })
    }   else if (filter.value == "time") {
            const timeToMinutes = (str) => {
                const [time, meridiem] = str.replace(' EST', '').split(' ');
                let [hours, minutes] = time.split(':').map(Number);
                if (meridiem === 'PM' && hours !== 12) hours += 12;
                if (meridiem === 'AM' && hours === 12) hours = 0;
                return hours * 60 + minutes;
            };

            events.sort((a, b) => {
            return timeToMinutes(a.event_time) - timeToMinutes(b.event_time);
        });
    } else if (filter.value == "date") {
        const dateToComparable = (str) => {
            return new Date(`2025 ${str}`);
        };

            events.sort((a, b) => {
            return dateToComparable(a.event_date) - dateToComparable(b.event_date);
        });
    }

    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-60 sm:h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-60 sm:h-50 bg-black opacity-60"></div>
                    <h1 className="absolute mt-10 text-5xl text-center font-bold text-maplegreen">BOX OFFICE</h1>
                    <p className="absolute mt-30 p-2 mb-10 sm:mt-30 text-center text-l sm:text-xl font-bold text-white">Browse tickets for a variety of events ranging from sports to concerts.</p>
                </div>
            </div>
            <button className={` w-55 mt-10 ml-1 sm:ml-50 bg-mapletan pl-2 pr-2 hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ${dropdown ? "rounded-t-xl" : "rounded-xl"} font-bold `} onClick={() => {setDropdown(!dropdown)}}>Sort By: {filter.label} <img className="pl-3 h-10 inline" src={arrowImage} alt="Dropdown Arrow" /></button>
            <div className={`flex flex-col ${dropdown ? "" : "hidden"}`}>
                {filterOps.map((option, index) => {
                    return (
                        <>
                            <hr className='w-55 ml-1 sm:ml-50' />
                            <button className={` w-55 ml-1 sm:ml-50 bg-mapletan pl-2 pr-2 py-2 hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80 ${(index < 4) ? "" : "rounded-b-xl"} `} onClick={() => setFilter(option)} >{option.label}</button>
                        </>
                    )
                })}
            </div>
            <div className='flex flex-col'>
                {events.map((event) => (<Event {...event} />))}
            </div>
            <Footer />
        </>
    )
}