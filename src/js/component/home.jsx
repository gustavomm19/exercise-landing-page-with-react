import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
  const cards = [
    {
      title: "Card Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet enim a nibh posuere, nec maximus turpis blandit. Vestibulum sit amet suscipit sem.",
    },
    {
      title: "Card Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet enim a nibh posuere, nec maximus turpis blandit. Vestibulum sit amet suscipit sem.",
    },
    {
      title: "Card Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet enim a nibh posuere, nec maximus turpis blandit. Vestibulum sit amet suscipit sem.",
    },
    {
      title: "Card Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet enim a nibh posuere, nec maximus turpis blandit. Vestibulum sit amet suscipit sem.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container px-1-sm px-3-md px-5-lg mb-5">
        <Jumbotron />
        <div className="container p-0 mt-5 cards-container d-flex flex-wrap justify-content-between">
          {cards.map((card) => (
            <Card title={card.title} text={card.text} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
