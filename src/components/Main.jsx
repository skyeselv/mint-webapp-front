import React from "react";
import "../assets/styles/main.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Content from "./Content";

const content = [
  {
    image: require("../assets/images/image1.png"),
    description:
      "Total sales for the April 2018-released God of War for PlayStation 4 have surpassed 10 million",
    autor: "Maddox",
    date: "11.05.2019"
  },

  {
    image: require("../assets/images/image2.png"),
    description:
      "As Cyberpunk 2077 Development Intensifies, CD Projekt Red Pledges To Be 'More Humane' To Its Workers",
    autor: "Skye",
    date: "11.05.2019"
  },
  {
    image: require("../assets/images/image3.png"),
    description:
      "The Last of Us 2 is in its final stages of development, says game's Co-Director",
    autor: "Maximus",
    date: "11.05.2019"
  },
  {
    image: require("../assets/images/image4.png"),
    description:
      "Mordhau players bust through map, reach character select screen",
    autor: "Blur",
    date: "11.05.2019"
  },
  {
    image: require("../assets/images/image5.png"),
    description: "Just Cause Movie Being Developed by John Wick Creator",
    autor: "Allen",
    date: "11.05.2019"
  },
  {
    image: require("../assets/images/image6.png"),
    description:
      "Sources: Call of Duty 2020 In Upheaval As Treyarch Takes Over, Plans Black Ops 5",
    autor: "Maximus",
    date: "11.05.2019"
  }
];

function Main() {
  return (
    <div className="main">
      <div className="main-top">
        <div className="main-top-carousel">
          <Carousel autoPlay showThumbs="" showStatus="" infiniteLoop>
            <div>
              <img src={require("../assets/images/carousel1.png")} />
              <p className="legend">
                Google Stadia will share game titles, pricing, launch info this
                summer
              </p>
            </div>
            <div>
              <img src={require("../assets/images/carousel2.png")} />
              <p className="legend">
                The PC version of Metro Exodus, it seems, has recently lost its
                exclusive status of Epic Games Store
              </p>
            </div>
            <div>
              <img src={require("../assets/images/carousel3.png")} />
              <p className="legend">
                Hideo Kojima tried to explain the Death Stranding genre, but
                only confused the players
              </p>
            </div>
          </Carousel>
        </div>
        <div className="main-top-preview">
          <img src={require("../assets/images/preview1.png")} />
          <span className="main-top-preview-legend">
            GRID Announced for PC and Consoles
          </span>
        </div>
      </div>

      <div className="news-description">Popular News</div>
      <div className="main-news">
        <Content content={content} />
      </div>
    </div>
  );
}

export default Main;
