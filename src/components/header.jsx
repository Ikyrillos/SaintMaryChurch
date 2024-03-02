import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://drive.google.com/file/d/1or0oJBORc8zxYeEJVIjfZxdZ_DmDSWEs/view?usp=sharing"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                  rel="noreferrer"
                >
                  محتوي الدبلومة
                </a>{" "}
                <a
                  href="https://drive.google.com/file/d/1yYPNNZU0YggMIb8MXKcRSoOkiGVQJ1SK/view?usp=sharing"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                  rel="noreferrer"
                >
                  اعلان و سعر الدبلومة
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
