import React from "react";
import "./Mac.css";
import mac1 from "../../assets/images/mac-1.svg";
import { MAC_ITEMS } from "../../static/Index";
import mac from "../../assets/images/mac.jpg";

function Mac() {
  return (
    <section className="mac">
      <div className="container">
        <div className="mac-all">
          {MAC_ITEMS?.map((el) => (
            <div key={el.id} className="mac-item">
              <img src={el.img} alt="" />
              <p>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mac-p">
        Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12
        months, interest‑free when you choose to check out <br /> with Apple
        Card Monthly Installments.◊ <span>Learn more</span>
      </p>
      <div className="mac-title">
        <div className="container mac-info">
          <h1>Mac</h1>
          <h2>
            If you can dream it, <br /> Mac can do it.
          </h2>
        </div>
      </div>
      <div className="mac-center">
        <div className="container mac-center-info">
          <h1>MackBook Air</h1>
          <p>Lean. Mean. M3 machine.</p>
          <div className="btn">
            <button className="btn-1">Learn more</button>
            <button className="btn-2">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mac;
