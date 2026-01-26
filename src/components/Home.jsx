import "./home.css";
import photo from "../assets/photos/hero-1-desktop.webp"

const Home = () => {
    return (
        <section className="container">
        <div className="home"> 
            <img src={photo} alt="Why Us" 
            className="container"/>
            <h2 className="container" ><span>50%</span> of prescribers are fast-growing and open to pharma</h2>
        
        </div>
        </section>
    );
}

export default Home;