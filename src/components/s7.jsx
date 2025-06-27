import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const S7 = () => {
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
          background: radial-gradient(circle at top left, #2d2417 0%, #000 100%);
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
          background: linear-gradient(to right, #ffc86b, #ffb1b1);
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

        .email-box {
          background: rgba(60, 40, 70, 0.45);
          border-radius: 18px;
          padding: 32px 36px 24px 36px;
          color: #cfcfcf;
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 32px;
          box-shadow: 0 8px 32px 0 rgba(31, 7, 50, 0.25);
          max-width: 600px;
        }
        .email-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 18px;
        }
        .email-correct {
          color: #fff;
        }
        .email-error {
          border-bottom: 2px dotted #ffb1b1;
          color: #ffb1b1;
          padding: 0 2px;
        }
        .email-suggestion {
          background: #6d4e9e;
          color: #fff;
          border-radius: 8px;
          padding: 2px 12px;
          margin-left: 6px;
          font-size: 1.2rem;
          font-weight: 500;
          display: inline-block;
        }
        .autocorrect-box {
          background: rgba(60, 40, 70, 0.7);
          border-radius: 16px;
          padding: 18px 32px;
          color: #fff;
          font-size: 2rem;
          font-weight: 400;
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }
        .autocorrect-highlight {
          color: #ffb1e6;
        }
      `}</style>

      <div className="container-fluid intro-section d-flex align-items-center" ref={sectionRef}>
        <div className="row w-100">
          {/* Left Column */}
          <div className="col-lg-6 left-col">
            <h1 className="intro-heading">
              <span style={{ color: '#ffc86b' }}>Fix </span>
              <span style={{ color: '#ffb1b1' }}>errors</span>
              <span> as you go</span>
            </h1>
            <h3 className="mt-4" style={{ fontWeight: 400 }}>
              Speed up your typing by <span style={{ fontWeight: 700 }}>30-50%</span>
            </h3>
            <p className="mt-4 subtext" style={{ color: '#cfcfcf' }}>
              Autocorrect fixes errors as you go — extra characters, missing characters, transposed characters, missing punctuation, incorrect capitalization — to name just a few. It beats the autocorrect in Gmail and Outlook across multiple benchmarks.
            </p>
            <p className="subtext" style={{ color: '#cfcfcf' }}>
              Most importantly, you go faster. Autocorrect increases typing speed by 30-50%.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <img
              src="ii.png"
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

export default S7;
