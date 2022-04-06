import React from "react";
import "./aboutus.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Aboutus() {
  return (
    <>
      <NavBar />
      <div class="about">
        <h3>About &nbsp; Us</h3>
      </div>

      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Sports Prism</h1>
            <p class="lead text-muted">
              The idea goes with the fulfilment of curious minds of youth who
              draw inspiration from "The World of Games".
            </p>
            <p>
              <a href="/" class="btn btn-primary my-2">
                Home
              </a>
            </p>
          </div>
        </div>
      </section>

      <div class="about">
        <h3>Team &nbsp; Members</h3>
      </div>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={require("./assets/vikrant.png")}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="335"
                />

                <div class="card-body">
                  <p class="card-text">
                    A passionate explorer trying to grow my skills.Trying to
                    learn more and apply more to know the best of my knowledge.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://www.linkedin.com/in/vikrant-palle-8475ab236/"
                          target="_blank"
                          class="profile"
                        >
                          {" "}
                          Socials{" "}
                        </a>
                      </button>
                    </div>
                    <small class="text-muted">Vikrant</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={require("./assets/gaurav.jpeg")}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="335"
                />

                <div class="card-body">
                  <p class="card-text">
                    An Enthusiast in technical fields.A student trying to glow
                    in the lights passing through the depth of darkness
                    confronting comfort.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://www.linkedin.com/in/gaurav-sindhu-509824227/"
                          target="_blank"
                          class="profile"
                        >
                          Socials
                        </a>
                      </button>
                    </div>
                    <small class="text-muted">Gaurav</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={require("./assets/kaustuv.jpeg")}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="335"
                />

                <div class="card-body">
                  <p class="card-text">
                    A creative problem solver with strong communication and
                    interpersonal skills. Pretty decent in networking and
                    establishing public relations.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://www.linkedin.com/in/kaustuv-behera-9826a8228"
                          target="_blank"
                          class="profile"
                        >
                          Socials
                        </a>
                      </button>
                    </div>
                    <small class="text-muted">Kaustuv</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={require("./assets/ankit.jpeg")}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="335"
                />

                <div class="card-body">
                  <p class="card-text">
                    A keen learner looking forward to configure the depth of my
                    skills and improve through Experience and knowledge .{" "}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://www.linkedin.com/in/ankit-anand-137694236/"
                          target="_blank"
                          class="profile"
                        >
                          Socials
                        </a>
                      </button>
                    </div>
                    <small class="text-muted">Ankit</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={require("./assets/amartya.jpeg")}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="335"
                />

                <div class="card-body">
                  <p class="card-text">
                    Longing the expertise and moving in the direction to grow
                    more and call the best version of myself pushing it to break
                    the bonds.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://www.linkedin.com/in/amartya-maurya-143abb230/"
                          target="_blank"
                          class="profile"
                        >
                          {" "}
                          Socials
                        </a>
                      </button>
                    </div>
                    <small class="text-muted">Amartya</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  src={require("./assets/sonu2.jpeg")}
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="335"
                />

                <div class="card-body">
                  <p class="card-text">
                    An 18 year old undergraduate pursuing B.Tech in Computer
                    Science at IIIT Lucknow. Well skilled and keen interested in
                    Frontend Development.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://www.linkedin.com/in/sonu-kumar-43b5a2236"
                          target="_blank"
                          class="profile"
                        >
                          Socials
                        </a>
                      </button>
                    </div>
                    <small class="text-muted">Sonu</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
