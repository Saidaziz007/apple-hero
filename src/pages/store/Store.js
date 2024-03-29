import React from "react";
import rasm from "../../assets/images/store-person.jpg";
import { IoLogoAppleAppstore } from "react-icons/io5";
import "./Store.css";
import { STORE_ITEMS } from "../../static/Index";

function Store() {
  return (
    <section className="store-all">
      <div className="container">
        <div className="store-1">
          <div className="store-top">
            <p>
              <span>Store.</span> The best way to buy the products you love.
            </p>
            <div className="store-per">
              <div className="store-per-1">
                <img src={rasm} alt="" />
                <div className="store-per-1-1">
                  <h3>Need shopping help?</h3>
                  <h4>Ask a Specialist</h4>
                </div>
              </div>
              <div className="store-per-1">
                <IoLogoAppleAppstore />
                <div className="store-per-1-1">
                  <h3>Visit an Apple Store</h3>
                  <h4>Find one near you</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="store-map">
            {STORE_ITEMS?.map((el) => (
              <div key={el.id} className="store-item">
                <img src={el.img} alt="" />
                <h2>{el.title}</h2>
              </div>
            ))}
          </div>
          <div className="store-bottom">
            <p className="store-bottom-p">
              <span>The latest.</span> Take a look at what’s new, right now.
            </p>
            <div className="store-wrapper">
              <div className="store-card">
                <p>mackbook air</p>
                <h1>Designed to go places</h1>
                <p>From $999 or $83.25/mo. for 12mo.</p>
              </div>
              <div className="store-card-1">
                <p>iphone 15 pro</p>
                <h1>Titanium</h1>
                <p>From $999 or $41.62/mo. for 24mo.</p>
              </div>
              <div className="store-card-2">
                <p>apple vision pro</p>
                <h1>Welcome to spatial computing</h1>
                <p>From $3499 or $291.58/mo. for 12mo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Store;
