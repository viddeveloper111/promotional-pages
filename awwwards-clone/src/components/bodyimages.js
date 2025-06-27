import React from "react";

const Images = ({ data }) => {
  const renderTextWithSup = (text) => {
    if (text.includes(" Pro")) {
      const [mainText] = text.split(" Pro");
      return (
        <>
          {mainText}
          <sup>Pro</sup>
        </>
      );
    } else if (text.includes(" Int")) {
      const [mainText] = text.split(" Int");
      return (
        <>
          {mainText}
          <sup>Int</sup>
        </>
      );
    } else {
      return text;
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center g-4">
        {data.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.img}
                alt={`Image ${index + 1}`}
                className="card-img-top img-fluid"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text fw-medium text-start">
                  {renderTextWithSup(item.text)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
