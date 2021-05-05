import React from 'react';

export default function Home(props) {
  return (
    <>
    <div className="home container-fluid p-0">
      <section className="carousel">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            Carousel goes here
          </div>
        </div>
      </section>

      <section className="home-links">
        <div className="row mx-auto">
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">STORE LOCATIONS</h1>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">TASTEA REWARDS</h1>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">CAREERS</h1>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">FUNDRAISING</h1>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">PREMIUM PLEDGE</h1>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">FRANCHISE</h1>
          </div>
        </div>
      </section>

      <section className="what-is-tastea">
        <div className="row mx-auto" style={{ textAlign: 'center' }}>
          <h1 className="col-12 d-flex justify-content-center">WHAT IS TASTEA?</h1>
          <h3 className="col-12 d-flex justify-content-center">AN INNOVATIVE &amp; DELICIOUS NEW WAY TO ENJOY SMOOTHIES &amp; TEAS</h3>
          <div className="col-12 d-flex justify-content-center">
            <p>
            Since 2001, Tastea has been a shining star for innovative &amp; delicious smoothie <br/>
            and tea drinks. By using high quality premium tea leaves whenever possible, <br/>
            our drinks are not only delicious but responsibly brewed.
          </p>
          </div>
        </div>
      </section>

      <section className="drinks-preview">
        <div className="row mx-auto">
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
        </div>

        <div className="row mx-auto">
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
        </div>

        <div className="row mx-auto">
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
          <div className="col-2 d-flex justify-content-center">Hello</div>
        </div>
      </section>

      <section className="footer">
        <div className="row mx-auto">
          <div className="col-3 d-flex justify-content-center">
            <img src="./tastealogo.png" alt=""/>
          </div>

          <div className="col-9 d-flex justify-content-center">
            <div className="col-3">
              <ul className="footer-list">
                <li><a href="/">Our Story</a></li>
                <li><a href="/">Our Premium Pledge</a></li>
                <li><a href="/">Stories &amp; News</a></li>
              </ul>
            </div>

            <div className="col-3">
              <ul className="footer-list">
                <li><a href="/">Tastea Rewards</a></li>
                <li><a href="/">Customer Service</a></li>
                <li><a href="/">Our Menu</a></li>
              </ul>
            </div>

            <div className="col-3">
              <ul className="footer-list">
                <li><a href="/">Our Location</a></li>
                <li><a href="/">Join Our Team</a></li>
                <li><a href="/">Franchise with Tastea</a></li>
              </ul>
            </div>

            <div className="col-3">
              <ul className="footer-list">
                <li><a href="/">Fundraising</a></li>
                <li><a href="/">Catering</a></li>
                <li><a href="/">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-12 d-flex justify-content-center">
            icon1 icon2
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-12 d-flex justify-content-center">
            <div className="d-inline">
              <a href="/">Privacy Statements</a> | <a href="/">Terms of Use</a> | <a href="/">Tastea Rewards</a>
            </div>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-12 d-flex justify-content-center">
            &copy; 2020 TASTEA, LLC.  ALL RIGHTS RESERVED
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
