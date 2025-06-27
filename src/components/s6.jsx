import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const S6 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start fade when bottom of section is near top of viewport
      if (rect.top < windowHeight * 0.1) {
        section.classList.add("scroll-exit");
      } else {
        section.classList.remove("scroll-exit");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .intro-section {
          min-height: 80vh;
          background: radial-gradient(circle at top left, #0c0c0c 0%, #000 100%);
          color: white;
          padding: 80px 20px;
          position: relative;
          z-index: 1;
          transition: all 0.8s ease;
        }

        .intro-heading {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .intro-gradient {
          background: linear-gradient(to right, #56ccf2, #bc4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtext {
          font-size: 1.1rem;
          color: #cfcfcf;
        }

        .see-more {
          color: #d26cff;
          font-weight: 500;
          margin-top: 1rem;
          display: inline-block;
        }

        /* Default state */
        .left-col,
        .right-img {
          opacity: 1;
          transform: translateY(0px);
          transition: all 1s ease;
        }

        /* Scroll exit effect */
        .scroll-exit .left-col {
          opacity: 0;
          transform: translateY(30px);
        }

        .scroll-exit .right-img {
          opacity: 0;
          transform: translateY(-50px);
        }
      `}</style>

      <div className="container-fluid intro-section d-flex align-items-center" ref={sectionRef}>
        <div className="row w-100">
          {/* Left Column */}
          <div className="col-lg-6 left-col">
            <h1 className="intro-heading">
              <span className="intro-gradient">See when people read</span>
              <br />your email
            </h1>

            <h4 className="mt-4">Respond with brilliant timing</h4>
            <p className="mt-3 subtext">
              In Superhuman, you can see when people read your email and on which device.
            </p>
            <p className="subtext">
              If someone doesn't reply, read statuses can show why. Maybe they never opened your email. Or perhaps they did, but on their phone. Now you can follow up with just the right message.
            </p>
            <p className="subtext">
              Use read statuses to close high-value deals, hire elusive candidates, and work more effectively with your team.
            </p>
            <a href="#" className="see-more">
              See more →
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <img
              src="i.png"
              alt="Auto Draft"
              className="img-fluid rounded shadow-lg right-img"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default S6;
