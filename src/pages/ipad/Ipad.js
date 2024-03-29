import React from "react";
import "./Ipad.css";
import ipad from "../../assets/images/ipad.jpg";
import ipadinfo from "../../assets/images/ipad-info.png";
import { IPAD_ITEMS } from "../../static/Index";

function Ipad() {
  return (
    <section className="ipad">
      <div className="container">
        <div className="ipad-wrapper">
          {IPAD_ITEMS?.map((el) => (
            <div key={el.id} className="ipad-item">
              <img src={el.img} alt="" />
              <p>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="ipad-p">
        Get 3% Daily Cash back with Apple Card. And pay for your new iPad over
        12 months, interest-free when you choose to check out with Apple Card
        Monthly Installments.* <br /> <span>Learn more</span>
      </p>
      <div className="container">
        <div className="ipad-all">
          <div className="ipad-left">
            <h1>iPad Pro</h1>
            <h2>
              Supercharged by <img src={ipadinfo} alt="" />
            </h2>
            <h3>From $799</h3>
            <button className="btn-1">Buy</button>
            <a href="">Learn more</a>
          </div>
          <div className="ipad-right">
            <img src={ipad} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ipad;
