import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const S3 = () => {
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
          background: linear-gradient(90deg, #ffd47e 0%, #ff8fa3 40%, #bc4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
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
                                    <h1 className="intro-heading"> Follow up </h1>

            <h1 className="intro-heading intro-gradient">on time, every time </h1>

            <h4 className="mt-4">Never drop the ball again </h4>
            <p className="mt-3 subtext">
You're sending a crucial email: closing a deal, delegating a task, or landing a meeting. But people are busy — you might not hear back. So what do you do? You could painstakingly maintain a list or spreadsheet. Or you could somehow try to keep it all in your head.
            </p>
            <p className="subtext">
Superhuman makes it fast and easy. When you send an email, just choose a time — for example, 2 days. If you don't hear back by then, we'll remind you to follow up. You'll follow up on time, every time.            </p>
            <a href="#" className="see-more">
              See more →
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <img
              src="3.png"
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

export default S3;
