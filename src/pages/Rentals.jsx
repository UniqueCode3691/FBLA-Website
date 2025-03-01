import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import gymImage from "../assets/gym.png"
import { Link } from "react-router-dom"
import React from "react"

export default function Rentals() {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysArray = [];
    const [bounce, setBounce] = React.useState(false);
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(null); // Empty days before the first day
    }
    for (let i = 1; i <= totalDaysInMonth; i++) {
        daysArray.push(i);
    }
    const weeks = [];
    for (let i = 0; i < daysArray.length; i += 7) {
        weeks.push(daysArray.slice(i, i + 7));
    }
    const prevMonth = () => {
        const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        setCurrentDate(new Date(newYear, newMonth, 1));
    };
    const nextMonth = () => {
        const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        setCurrentDate(new Date(newYear, newMonth, 1));
    };
    const isBooked = (day) => {
        const holidays = [1, 3, 5, 9, 11, 19, 25, 28]; // Example: Highlight December 25th
        return holidays.includes(day);
    };
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const targetRef = React.useRef(null);

    const scrollToSection = () => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        setBounce(true);
        setTimeout(() => {
            setBounce(false);
        }, 2500)
      };

    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-50 bg-black opacity-60"></div>
                    <h1 className="relative top-0 right-0 h-90 text-5xl -mt-30 text-center font-bold text-maplegreen">RENTALS</h1>
                    <p className="relative top-0 right-0 -mt-75 sm:mx-15 text-center text-xl font-bold text-white ">Rentals start at the affordable price of $30.00 and $15 for every hour! (Plus tax)</p>
                </div>
            </div>
            <div className="w-full mx-auto p-4 mt-5">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={prevMonth} className="sm:text-xl p-2 bg-maplegreen rounded-xl hover:bg-green-900">
                        Prev.
                    </button>
                    <h2 className="text-xl sm:text-4xl font-bold">
                        {monthNames[currentMonth]}, {currentYear}
                    </h2>
                    <button onClick={nextMonth} className="sm:text-xl p-2 bg-maplegreen rounded-xl hover:bg-green-900">
                        Next.
                    </button>
                </div>
                <div className="mx-auto my-5 text-center w-20">
                    <h1 className="font-bold text-xl">Legend:</h1>
                    <p className="bg-maplered">Booked</p>
                    <p className="">Open</p>
                </div>
                <table className="w-20 sm:w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-mapleorange">
                            <th className="p-2 text-center">Sun</th>
                            <th className="p-2 text-center">Mon</th>
                            <th className="p-2 text-center">Tue</th>
                            <th className="p-2 text-center">Wed</th>
                            <th className="p-2 text-center">Thu</th>
                            <th className="p-2 text-center">Fri</th>
                            <th className="p-2 text-center">Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weeks.map((week, index) => (
                            <tr key={index}>
                            {week.map((day, i) => (
                                <td key={i} className={`p-4 text-center border hover:bg-gray-300 ${isBooked(day) ? 'bg-maplered hover:bg-maplered' : ''}`}>
                                    <button onClick={scrollToSection} className='w-full h-full'>
                                        {day ? (
                                            <span className="block p-2 rounded-full">{day}</span>
                                        ) : (
                                            <span className="block p-2 opacity-0">-</span>
                                        )}
                                    </button>
                                </td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p ref={targetRef} className={`my-10 text-xl font-bold text-center z-50 ${bounce ? 'bg-mapletan animate-bounce' : ''}`}>Found the date you want? Head to <Link to="/about-us" className='text-maplegreen hover:text-green-950 underline hover:cursor-pointer'>About Us</Link> for contact info and call to lock in your date.</p>
            <Footer />
        </>
    )
}