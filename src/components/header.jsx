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
                  style={{
                    marginTop: "10px",
                  }}
                >
                  محتوي الدبلومة
                </a>
                {"  "}
                <a
                  href="https://drive.google.com/file/d/1yYPNNZU0YggMIb8MXKcRSoOkiGVQJ1SK/view?usp=sharing"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  اعلان و سعر الدبلومة
                </a>{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeXGolmMxIYb4YIBItr0HpfOdXtFSWxwt2XyEvQdtQoAU4vuQ/viewform?usp=sf_link"
                  className="btn btn-lg page-scroll"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    // green gradient
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    marginTop: "10px",
                    color: "white",
                    height: "50px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    borderRadius: "20px",
                  }}
                >
                  التسجيل
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
