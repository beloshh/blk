import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../components/style.css";

function Home(props) {
  return (
    <div>
      <section className="one">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a>Main</a>
            </li>
            <li className="current">
              <a>Benefits</a>
            </li>
            <li className="cur">
              {" "}
              <img
                className="image-one"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614866969/Images/logo.png_i37wt6.png"
                }
                alt="logo"
              />
            </li>
            <li className="current">
              <a>Did you know </a>
            </li>
            <li className="current">
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="two">
        <div className="columns">
          <div className="column is-5" id="image">
            <div>
              {" "}
              <img
                className="image-two"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614873483/Images/pack.9f6a1ca8_mru8m1.png"
                }
                alt="logo"
              />
            </div>
          </div>
          <div className="column">
            <p className="first-para">
              Also called Roselle, or Rosella, Sorrel or Agua/Rosa de <br />
              Jamaica or Bissop or Zobo...
            </p>
            <p className="para-one">
              Whatever you <br />
              call it,
            </p>
            <p className="para-two">
              YOU'VE NEVER
              <br /> HAD IT
              <br /> QUITE LIKE <br />
              THIS.
            </p>
            <img
              className="icon"
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1614876959/Images/icons8-double-down-64_bymoh4.png"
              }
              alt="logo"
            />
          </div>
        </div>
      </section>

      <section className="three">
        <div className="columns" id="columns">
          <div className="column is-half" id="images">
            <div>
              <p className="para-three">BENEFITS</p>
              <p className="para-four">
                Zobo contains 100% natural <br /> ingredients, handpicked and{" "}
                <br />
                carefully cleaned, with an added <br />
                touch of motherly care.
              </p>
              <p className="para-four">
                Zobo supports women, the <br /> ingredients are sourced from
                local <br />
                woman farmers
              </p>
              <p className="para-four">
                Zobo uses only natural ingredients <br />
                that are great for your health
              </p>
              <p className="para-four">Zobo is fair trade </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="image-container">
              {" "}
              <img
                className="image-three"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614878607/Images/benefits-cups.f68422dc_kgphlk.png"
                }
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="four">
        <div>
          <p className="para-five">DID YOU KNOW?</p>
          <p className="para-six"> Zobo is great for your health!</p>
        </div>
        <div className="block">
          <div className="columns" id="section">
            <div className="column">
              <p className="para-seven">HIBISCUS</p>
              <img
                className="image-five"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614886658/Images/hibiscus.e739ba0f_uabcpp.png"
                }
                alt="logo"
              />
              <p className="para-eight">
                Rich in vitamins A, B-1 and C <br /> Manages blood pressure{" "}
                <br /> Lowers cholesterol
              </p>
            </div>
            <div className="column">
              <p className="para-seven">MINT</p>
              <img
                className="image-five"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614886659/Images/mint.4490f52a_ylf0xy.png"
                }
                alt="logo"
              />
              <p className="para-eight">
                Mint is a stimulant that helps <br /> with weight loss
                <br /> Quick nausea remedy
              </p>
            </div>
            <div className="column">
              <p className="para-seven">GINGER</p>
              <img
                className="image-five"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614886657/Images/ginger.835e9bea_p1t1nq.png"
                }
                alt="logo"
              />
              <p className="para-eight">
                Helps against cold and flu <br /> Prevents occurence of
                <br /> stomach ulcer
              </p>
            </div>
            <div className="column">
              <p className="para-seven">CLOVES</p>
              <img
                className="image-five"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614886658/Images/cloves.fd193058_id1h6m.png"
                }
                alt="logo"
              />
              <p className="para-eight">
                Boosts immune system <br /> Helps with bone <br /> preservation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="six">
        <div className="block">
          <div>
            <p className="para-five"> ENJOY ZOBO</p>
          </div>
          <div className="paragraphs">
            <p className="para-nine"> HOT</p>
            <p className="para-ten"> CUSTOMIZE</p>
            <p className="para-eleven"> COOL</p>
          </div>
          <div className="paragraphs">
            <p className="para-twelve">
              You can drink zobo just as it <br /> is, for a nice hot hibiscus
              tea
            </p>
            <p className="para-thirteen">
              {" "}
              Or cold, for a nice chilled,
              <br /> refreshing beverage
            </p>
          </div>
          <div className="image-con">
            <img
              className="image-three"
              src={
                "https://res.cloudinary.com/badanga/image/upload/v1614899962/Images/cold-cup-half.d30ec14e_perpw1.png"
              }
              alt="logo"
            />
          </div>
        </div>
      </section>

      <section className="five">
        <div className="columns">
          <div className="column is-half" id="column-one">
            <div className="mole">
              <p className="para">THANK YOU!</p>
              <hr />
              <p className="paral">
                Thank you so much for taking the time to visit our website.
                <br />
                Everything we do, we do delicately with you in mind
              </p>
              <p className="paral">
                Because of this, we make sure that our products (and our <br />
                website) are carefully crafted and cleaned to keep you <br />
                satisfied.
              </p>
              <p className="paral">
                For all the support you give us, big and small, we want to{" "}
                <br /> say, from Zobo to you, a very hearful Thank you
              </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="form-container">
              <p className="para-sev"> BE PART OF OUR JOURNEY </p>
              <p className="para-twelve">
                {" "}
                Stay tuned and subscribe <br /> to receive our latest updates
              </p>
              <div>
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email Address" />
                  <p>
                    <textarea
                      placeholder="Message (optional)"
                      rows="3"
                    ></textarea>
                  </p>
                  <button type="submit"> SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <footer>
          <div className="columns is-tablet" id="foot-column">
            <div className="column" id="foot">
              <img
                className="foot-img"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614908236/Images/icons8-important-mail-24_kihkj6.png"
                }
                alt="logo"
              />{" "}
              <p className="foot-para">contact@zobo.com</p>
              <img
                className="foot-img"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614908236/Images/icons8-phone-24_e0cdmu.png"
                }
                alt="logo"
              />
              <p className="foot-para">+234 (0) 810 900 2010 </p>
            </div>
            <div className="column" id="foot-one">
              <img
                className="image-one"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614866969/Images/logo.png_i37wt6.png"
                }
                alt="logo"
              />
            </div>
            <div className="column" id="foot-two">
              <img
                className="foot-img"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614908236/Images/icons8-facebook-24_vjq7ai.png"
                }
                alt="logo"
              />{" "}
              <img
                className="foot-img"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614908236/Images/icons8-twitter-24_nz4jtx.png"
                }
                alt="logo"
              />
              <img
                className="foot-img"
                src={
                  "https://res.cloudinary.com/badanga/image/upload/v1614908236/Images/icons8-instagram-26_sf0dyn.png"
                }
                alt="logo"
              />
            </div>
          </div>
          <div>
            <hr />
          </div>

          <p className="para-last">
            {" "}
            ZOBO.COM © | ZOBO IS A TRADING NAME FOR PROSEEDS WORLDWIDE LIMITED,
            REGISTERED IN NIGERIA, WEST AFRICA
          </p>
        </footer>
      </section>
    </div>
  );
}

export default Home;
