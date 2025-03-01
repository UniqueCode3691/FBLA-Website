import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import gymImage from "../assets/gym.png"
import Event from "./components/Event.jsx";
import React from "react";
import gameImage from "../assets/game.webp";
import showImage from "../assets/show.jpg";
import trumpImage from "../assets/trump.webp";
import vbImage from "../assets/vb.jpg";
import willImage from "../assets/will smith.webp";

const events = [
    { seating:'Open', date:'March 11, 2025', time:'6:00 PM EST', event_image:gameImage, event_cost:'$0.00', event_duration:'1h 30m', event_name:'Varsity Basketball Game 10' },
    { seating:'Reserved', date:'September 25, 2025', time:'5:30 PM EST', event_image:willImage, event_cost:'$150.00', event_duration:'3h', event_name:'Will Smith B-Day' },
    { seating:'Open', date:'June 16, 2025', time:'7:00 PM EST', event_image:showImage, event_cost:'$2.00', event_duration:'1h', event_name:'School Talent Show' },
    { seating:'Open', date:'March 1, 2025', time:'4:00 PM EST', event_image:vbImage, event_cost:'$20.00', event_duration:'3h 15m', event_name:'Rec. Volleyball Game' },
    { seating:'Reserved', date:'April 10, 2025', time:'2:00 PM EST', event_image:trumpImage, event_cost:'$500.00', event_duration:'30m', event_name:'Presidential Visit' },
];

export default function BoxOffice() {
    const [startIndex, setStartIndex] = React.useState(0);
    const slidesToShow = 3

    const nextSlide = () => {
      setStartIndex((prevIndex) =>
        prevIndex === events.length - 3 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? events.length - 3 : prevIndex - 1
      );
    };
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-50 bg-black opacity-60"></div>
                    <h1 className="relative top-0 right-0 h-90 text-5xl -mt-50 sm:-mt-35 text-center font-bold text-maplegreen">BOX OFFICE</h1>
                    <p className="relative top-0 right-0 mx-2 -mt-60 sm:-mt-70 sm:mx-15 text-center text-l sm:text-xl font-bold text-white ">Browse tickets for a variety of events ranging from sports to concerts.</p>
                </div>
            </div>
            <div className=''>
                <div className='flex gap-4 justify-between transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
                    {events.slice(startIndex, startIndex +slidesToShow).map((event) => (
                        <Event seating={event.seating} date={event.date} time={event.time} event_image={event.event_image} event_cost={event.event_cost} event_duration={event.event_duration} event_name={event.event_name} />
                    ))}
                </div>
                <button
          onClick={prevSlide}
          className="absolute left-0 top-3/4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-900 transition disabled:opacity-50"
          disabled={startIndex === 0}
        >
          PREV
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-3/4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-900 transition disabled:opacity-50"
          disabled={startIndex + slidesToShow >= events.length}
        >
          NEXT
        </button>
            </div>
            <Footer />
        </>
    )
}