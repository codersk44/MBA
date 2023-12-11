import React from "react";

const Section = ({ h3, text, hasBtn = true, btnTxt, imgSrc }) => {
  return (
    <section className="section">
      <div>
        <h3>{h3}</h3>
        <p> {text} </p>
        {hasBtn && <button> {btnTxt} </button>}
      </div>
      <div>
        <img src={imgSrc} alt="" />
      </div>
    </section>
  );
};

export default Section;
