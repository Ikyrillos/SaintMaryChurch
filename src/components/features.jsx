import React from "react";

export const Features = (props) => {
  return (
    <div
      id="features"
      className="text-center"
      style={{
        padding: "2em",
      }}
    >
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>المميزات</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-6 col-sm-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
