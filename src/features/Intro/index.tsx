import React from "react";

const Intro = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5 align-items-center flex-lg-row-reverse">
        <div className="col-md-6 col-xl-7 mb-4 mb-lg-0 ">
          <div className="lc-block position-relative">
            <img
              className="img-fluid rounded shadow"
              src="https://images.pexels.com/photos/6069562/pexels-photo-6069562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="the second life"
            />
          </div>
        </div>
        <div className="col-md-6 col-xl-5">
          <div className="lc-block mb-3">
            <div >
              <h2 className="fw-bolder display-2">THE SECOND LIFE</h2>
            </div>
          </div>

          <div className="lc-block mb-4">
            <div >
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                velit temporibus impedits maxime repellendus esse tempore odio
                voluptatum iusto consectetur voluptates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
