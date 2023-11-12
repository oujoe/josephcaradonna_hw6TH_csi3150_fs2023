import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero.js";
import TravelBlog from "./components/TravelBlog/TravelBlog.js";

// import data from TravelData.js
import data from "./TravelData";

function App() {
  /* Modified code from https://github.com/martysen/AirBnB-React-Clone */
  const cards = data.map((item) => {
    return (
      <TravelBlog
        id={item.id}
        placeHeading={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        placeDescription={item.placeDescription}
      />
    );
  });

  return (
    <div className="main-container">
      <Hero />
      <section className="travel-cards">{cards}</section>
    </div>
  );
}

export default App;
