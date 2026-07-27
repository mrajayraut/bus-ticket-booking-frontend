import SearchBus from "../components/SearchBus";
import "../css/HomePage.css"

function HomePage(){
    return(
        <div className="home-container">
            <header className="navbar">
                <h2> Bus Booking System</h2>
                <button className="logout-btn">Logout</button>
            </header>

            <div className="hero-section">
                <h1>Find Your Perfect Journey</h1>

                <p>
                    search buses,compare routes, and book your seat easily.
                </p>
            </div>

            <div className="search-section">
                <SearchBus/>

            </div>

        </div>
    )
}

export default HomePage;