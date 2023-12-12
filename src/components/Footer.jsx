import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #CoonectOnCutting
        </h1>
        <aside>
          <a href="/" className="footerlink">
            home{" "}
          </a>
          <a href="/story" className="footerlink">
            Story{" "}
          </a>
          <a href="/media" className="footerlink">
            Media{" "}
          </a>
          <a href="/frenchias" className="footerlink">
            Frenchias
          </a>
          <a href="/event" className="footerlink">
            Event{" "}
          </a>
        </aside>

        <div>
          <h5>Mail</h5>
          <a href="mailto:65348565876">mba@123 </a>
        </div>
        <div>
          <h5>phone</h5>
          <a href="tel:65348565876"> 69879867098 </a>
        </div>
        <p>COPYRIGHT MBA CHAIWALA</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
