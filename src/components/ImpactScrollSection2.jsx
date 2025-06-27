import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IntroScrollSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Add scroll effect when the top of the section is near top of viewport
      if (rect.top < windowHeight * 0.3) {
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
          min-height: 100vh;
          background: radial-gradient(circle at top left, #0c0c0c 0%, #000 100%);
          color: white;
          padding: 100px 20px 120px 40px;
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

        .left-col {
          padding-left: 5rem;
          opacity: 1;
          transition: opacity 0.8s ease, transform 1s ease;
        }

        .right-img {
          max-width: 95%;
          height: auto;
          transform-origin: center;
          transition: transform 1.5s ease, opacity 1.5s ease;
        }

        /* Scroll effect: image moves first, text fades later */
        .scroll-exit .right-img {
          transform: translateY(-60px);
          opacity: 0;
        }

        .scroll-exit .left-col {
          transform: translateY(40px);
          opacity: 0;
        }

        @media (max-width: 768px) {
          .left-col {
            padding-left: 1.5rem;
          }
        }
      `}</style>

      <div className="container-fluid intro-section d-flex align-items-center" ref={sectionRef}>
        <div className="row w-100">
          {/* Left Column */}
          <div className="col-lg-6 left-col">
            <h1 className="intro-heading">Introducing</h1>
            <h1 className="intro-heading intro-gradient">Superhuman AI</h1>
            <h4 className="mt-4">Your AI-powered inbox assistant</h4>
            <p className="mt-3 subtext">
              Like a truly great assistant, Superhuman AI is constantly working beside you.
              Organizing your inbox. Making sure you never drop the ball. Drafting — and if you want
              — sending fully written emails on your behalf. It can even execute complete workflows,
              end-to-end, so you don’t have to.
            </p>
            <p className="subtext">
              Say goodbye to manual effort and hello to effortless productivity.
            </p>
            <a href="#" className="see-more">
              See more →
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <img
              src="1.png"
              alt="Auto Draft"
              className="img-fluid rounded shadow-lg right-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroScrollSection;
