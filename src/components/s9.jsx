import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const S9 = () => {
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
                                    <h1 className="intro-heading"> Type less and </h1>

            <h1 className="intro-heading intro-gradient">accelerate your team </h1>

            <h4 className="mt-4">Automate phrases and entire emails </h4>
            <p className="mt-3 subtext">No matter how fast we are, we all hit the same limit: the sheer time it takes to type.

            </p>
            <p className="subtext">
                With Snippets, you can automate typing and push past this limit. Insert phrases, paragraphs, or whole emails. You can even include attachments, add people to CC, or BCC internal systems.
            </p>
            <p className="subtext">You can also share Snippets with your team. Share common responses, recurring emails, and the most effective outreach. Your team will move faster, with consistent, up-to-date, and high-performing messaging.</p>
            <a href="#" className="see-more">
              See more →
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <img
              src="iv.png"
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

export default S9;
