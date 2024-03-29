import React from "react";
import { IPHONE_ITEMS } from "../../static/Index";
import "./Iphone.css";
import Home from "../home/Home";

function Iphone() {
  return (
    <section className="iphone">
      <div className="container">
        <div className="iphone-wrapper">
          {IPHONE_ITEMS?.map((el) => (
            <div key={el.id} className="iphone-item">
              <img src={el.img} alt="" />
              <p>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="iphone-p">
        Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade
        in iPhone 11 or higher.1 <span>Shop iPhone</span>
      </p>
      <div className="iphone-title">
        <div className="container iphone-info">
          <h1>Iphone</h1>
          <h2>Designed to be loved</h2>
        </div>
      </div>
      <div className="iphone-banner">
        <div className="container">
          <div className="home-1">
            <div className="home-all">
              <h1 style={{ color: "black" }}>iPhone 15</h1>
              <p style={{ color: "black" }}>
                New camera. New design. Newphoria.
              </p>
              <div className="btn">
                <button className="btn-1">Learn more</button>
                <button className="btn-2">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Iphone;
