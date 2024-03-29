import React from "react";
import { WATCH_ITEMS } from "../../static/Index";
import "./Watch.css";
import rasm1 from "../../assets/images/watch-hero.png";
import rasm2 from "../../assets/images/watch-bottom.jpg";
import { FaRegPlayCircle } from "react-icons/fa";

function Watch() {
  return (
    <section className="watch">
      <div className="container">
        <div className="watch-wrapper">
          {WATCH_ITEMS?.map((el) => (
            <div key={el.id} className="watch-item">
              <img src={el.img} alt="" />
              <p>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="watch-p">
        Get 3 months of Apple Fitness+ when you buy any Apple Watch.
        <span> Shop Apple Watch</span>
      </p>
      <div className="container">
        <div className="watch-all">
          <div className="watch-top">
            <img src={rasm1} alt="" />
            <h1>Smarter. Brighter. Mighter.</h1>
            <h3>From $399 </h3>
            <button className="btn-3">Buy</button>
            <div className="watch-a">
              <a href="">Learn more</a>
              <a href="">
                Watch the film <FaRegPlayCircle />
              </a>
            </div>
          </div>
          <div className="watch-bottom">
            <img src={rasm2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch;
