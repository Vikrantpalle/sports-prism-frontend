import React from "react";
import "./contactus.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Contactus() {
  return (
    <>
      <NavBar />
      <div class="about">
        <h3>Contact &nbsp; Us</h3>
      </div>

      <div class="container my-4">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <!-- <img src="back.png" class="d-block w-100" alt="..." id="img" /> --> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container d-flex justify-content-center">
        <div class="card">
          <div class="card-body">Let's start a conversation</div>
        </div>
      </div>

      <div class="container my-4">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Your Opinion matters😉😉
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Each Opinion is unique, So are you😇😇.</strong> The
                opinion to make this website is to initialise the comforts of
                people in a broader perspective.
                <code>Post your query by filling a form below</code>We would
                love to hear from You.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Address your query
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  Post your Query
                  {/* <!-- Launching Modal --> */}
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    class="btn btn-primary mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#queryModal"
                  >
                    here
                  </button>
                </strong>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="queryModal"
                  tabindex="-1"
                  aria-labelledby="queryModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="queryModalLabel">
                          Get in touch with us
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div class="modal-body">
                        <form class="row g-3">
                          <div class="col-md-6">
                            <label for="First Name" class="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="First Name"
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="Last Name" class="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                          <div class="col-12">
                            <label for="inputAddress" class="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="inputAddress"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="query" class="form-label">
                              Query
                            </label>
                            <select id="query" class="form-select">
                              <option selected>Type</option>
                              <option>Support</option>
                              <option>Ask</option>
                              <option>Report</option>
                              <option>Suggestion</option>
                              <option>Improvement</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <label for="inputZip" class="form-label">
                              Phone Number
                            </label>
                            <input type="number" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              class="form-label"
                            >
                              Message
                            </label>
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-dark">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="spacer"></div>
      <Footer />
    </>
  );
}
export default Contactus;
