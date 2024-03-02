import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>فريق العمل</h2>
          <p>
            فريق العمل المسئول عن تنفيذ الدبلومة والتأكد من تقديم المحتوى بأعلى
            جودة
          </p>
        </div>
        <div id="row" className="col-md-3 col-sm-6 team">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className="thumbnail">
                    {" "}
                    <img
                      src={d.img}
                      alt="..."
                      className="team-img"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
