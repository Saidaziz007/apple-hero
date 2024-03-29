import React from "react";
import "./Vision.css";
import visionpro from "../../assets/images/vision-pro.png";

function Vision() {
  return (
    <section className="vision">
      <div className="container">
        <div className="vision-all">
          <div className="vision-title">
            <h1>Apple Vision Pro</h1>
          </div>
          <div className="vision-info">
            <p className="p-1">Overview</p>
            <p className="p-2">Guided Tour</p>
            <p className="p-3">Tech Specs</p>
            <p className="p-4">Book a demo</p>
            <button className="btn-4">Buy</button>
          </div>
        </div>
      </div>
      <div className="vision-banner">
        <div className="container">
          <div className="vision-1">
            <img src={visionpro} alt="" />
            <p>Welcome to the are of spatial computing.</p>
            <div className="btn">
              <button className="btn-1">Learn more</button>
              <button className="btn-2">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
