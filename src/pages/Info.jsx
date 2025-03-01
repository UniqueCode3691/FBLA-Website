import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import gymImage from "../assets/gym.png";
import planImage from "../assets/floor_plan.jpg";
import rulesImage from "../assets/rules.jpg";

export default function Info() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "../assets/floor_plan.jpg";
        link.download = "floor_plan.jpg";
        link.click();
    };
    return (
        <>
            <Header />
            <div className="w-full h-50 bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${gymImage})` }}>
                <div className="relative top-0 right-0 inset-0 w-full h-50 bg-black opacity-60"></div>
                <h1 className="relative top-0 right-0 h-90 text-5xl -mt-40 sm:-mt-30 text-center font-bold text-maplegreen">INFO</h1>
                <p className="relative top-0 right-0 -mt-75 sm:mx-15 text-center text-l sm:text-xl font-bold text-white ">About the gymnasium and our policies.</p>
            </div>
            <div className="flex flex-col sm:flex-row bg-amber-100">
                <div className="w-full flex flex-col items-center">
                    <h1 className="mt-10 sm:mt-25 text-5xl text-mapleorange font-bold text-center">FLOOR PLAN</h1>
                    <p className="mt-5 mx-5 text-center text-xl sm:mx-15">The MRHS Gymnasium has multiple areas and a grand 3,500 seats, but manages to keep the floor plan simple.<span className="font-bold"> Click the image to download it!</span></p>
                </div>
                <button onClick={handleDownload}>
                    <img src={planImage} alt="Ball Image" className="sm:block h-1/2 w-1/2 my-10 mx-auto sm:mr-10 rounded-2xl transition-transform duration-500 ease-in-out transform sm:hover:scale-120 active:scale-120"/>
                </button>
            </div>
            <div className="flex flex-col sm:flex-row bg-maplebrown">  
                <img src={rulesImage} alt="Ball Image" className="block h-8/10 w-8/10 my-10 ml-10 rounded-2xl"/>
                <div className="w-full flex flex-col items-center">
                    <h1 className="mt-10 sm:mt-25 text-5xl text-black font-bold">OUR RULES</h1>
                    <p className="my-5 mx-5 text-center text-xl sm:mx-15">We believe that the cleaner the stadium, the more entertaining the experience. Please pick up <span className="font-bold">your litter</span> and <span className="font-bold">don't bring in outside food</span> as to not discourage our own vendors. Also, <span className="font-bold">no foul language, horseplay, or anything that could be considered offensive by others.</span> We want to be as welcoming as possible. <span className="font-bold">Most importantly, have a good time!</span></p>
                </div>
            </div>
            <Footer />
        </>
    )
}