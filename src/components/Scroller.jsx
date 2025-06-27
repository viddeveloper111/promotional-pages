import React, { useEffect, useRef } from "react";

const Scroller = () => {
const lines = [
  {
    text: [{ value: "Fly through your email", gradient: false }],
  },
  {
    text: [
      { value: "Twice as fast", gradient: "purple" },
      { value: "as before.", gradient: false },
    ],
  },
  {
    text: [
      { value: "Be", gradient: false },
      { value: "more responsive", gradient: "pink" },
      { value: "to", gradient: false },
    ],
  },
  {
    text: [{ value: "what matters most.", gradient: false }],
  },
  {
    text: [{ value: "Collaborate faster", gradient: "blue" },       { value: "than", gradient: false },
],
  },
  {
    text: [{ value: "ever before.", gradient: false }],
  },
];

  const lineRefs = useRef([]);

  useEffect(() => {
    const observers = lineRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.classList.add("animate-visible");
            observer.unobserve(ref);
          }
        },
        { threshold: 0.6 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <style>{`
        .scroller-line {
          opacity: 0.3;
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.4;
          transition: opacity 0.6s ease;
        }

        .animate-visible {
          opacity: 1;
        }

        .highlight-purple {
          background: linear-gradient(to right, #a18cd1, #fbc2eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-pink {
          background: linear-gradient(to right, #ffb347, #ff6ec4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-blue {
          background: linear-gradient(to right, #56ccf2, #2f80ed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .word {
          margin-right: 0.4rem;
        }
      `}</style>

      <div className="container-fluid bg-black text-white min-vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-center px-4 py-5">
        {/* Left Side: Image */}
        <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
          <img
            src="chat.png" // Update with your image path
            alt="Chat Preview"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right Side: Text */}
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start gap-3">
          {lines.map((line, i) => (
            <div
              key={i}
              ref={(el) => (lineRefs.current[i] = el)}
              className="scroller-line"
            >
              {line.text.map((part, j) => (
                <span
                  key={j}
                  className={`word ${
                    part.gradient
                      ? `highlight-${part.gradient}`
                      : ""
                  }`}
                >
                  {part.value}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Scroller;
