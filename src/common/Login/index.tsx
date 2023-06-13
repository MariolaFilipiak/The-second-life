const Login = () => {
  return (
    <div className="container py-4 min-vh-100 d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-xl-10 mx-auto">
          <div className=" border-0 shadow">
            <div className="row no-gutters justify-content-center">
              <div className="col-sm-6 text-center py-5">
                <h3 className="font-weight-bold">Sign-in</h3>
                <div className="d-flex my-3 justify-content-center">
                  <a  className="mx-2 btn btn-light rounded-circle">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                  <a  className="mx-2 btn btn-light rounded-circle">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                  <a  className="mx-2 btn btn-light rounded-circle">
                    <i className="mdi mdi-linkedin"></i>
                  </a>
                </div>
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="inputEmailForm" className="sr-only control-label">
                      Email
                    </label>
                    <div className="col-8 col-sm-12 col-md-10 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmailForm"
                        placeholder="email"
                        required
                      />
                      <div className="invalid-feedback">
                        Oops, email is required
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="inputPasswordForm"
                      className="sr-only control-label"
                    >
                      Password
                    </label>
                    <div className="col-8 col-sm-12 col-md-10 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        id="inputPasswordForm"
                        placeholder="password"
                        required
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                      />
                      <div className="valid-feedback">Nice looks good!</div>
                      <div className="invalid-feedback">
                        6 chars (1 upper, 1 lower &amp; numeric)
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mx-auto">
                      <a  className="small text-dark">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div className="form-group justify-content-center">
                    <div className="pb-3 pt-2">
                      <button type="submit" className="btn btn-dark rounded-pill">
                        Sign-in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 rounded text-white text-center">
                <div className="bg-dark rounded p-5 h-100 d-flex flex-column align-items-center justify-content-center">
                  <h3 className="font-weight-bold">Hello, Friend!</h3>
                  <p className="small my-3">Want to start free?</p>
                  <button
                    type="submit"
                    className="btn btn-outline-light rounded-pill"
                  >
                    Sign-up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
