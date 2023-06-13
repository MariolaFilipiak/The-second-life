import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container py-4 min-vh-100 d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-xl-10 mx-auto">
          <div className=" border-0 shadow">
            <div className="row no-gutters justify-content-center">
              <div className="col-sm-6 text-center py-5">
                <h3 className="font-weight-bold">Contact Us</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label
                      htmlFor="inputName"
                      className="sr-only control-label"
                    >
                      Name
                    </label>
                    <div className="col-8 col-sm-12 col-md-10 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="inputEmail"
                      className="sr-only control-label"
                    >
                      Email
                    </label>
                    <div className="col-8 col-sm-12 col-md-10 mx-auto">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="inputMessage"
                      className="sr-only control-label"
                    >
                      Message
                    </label>
                    <div className="col-8 col-sm-12 col-md-10 mx-auto">
                      <textarea
                        className="form-control"
                        id="inputMessage"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group justify-content-center">
                    <div className="pb-3 pt-2">
                      <button
                        type="submit"
                        className="btn btn-dark rounded-pill"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 rounded text-white text-center">
                <div className="bg-dark rounded p-5 h-100 d-flex flex-column align-items-center justify-content-center">
                  <h3 className="font-weight-bold">Hello!</h3>
                  <p className="small my-3">We would love to hear from you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
