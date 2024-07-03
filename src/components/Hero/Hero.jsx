import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle " />
            <h1>
              Discover <br />
              Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-description">
            <span>find a variety pf properties that suit you very easily</span>
            <span>Forget all difficulty in finding a residence for you</span>
          </div>
          <div className="search-bar"></div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="introductary image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
