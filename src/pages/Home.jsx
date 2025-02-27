import Header from './components/Header.jsx';
import gymImage from "../assets/gym.png"

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-full h-90 bg-cover" style={{ backgroundImage: `url(${gymImage})` }}>
                    <div className="relative top-0 right-0 inset-0 w-full h-90 bg-black opacity-50"></div>
                    <h1 className="relative top-0 right-0 w-full h-90 text-5xl -mt-70 text-center text-mapletan">THE ARENA</h1>
                    <p></p>
                </div>
            </div>
        </>
    )
}