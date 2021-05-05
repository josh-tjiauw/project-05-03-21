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

      <section>
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
    </div>
    </>
  );
}
