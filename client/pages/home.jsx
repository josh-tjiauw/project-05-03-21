import React from 'react';

export default function Home(props) {
  return (
    <>
    <div className="container-fluid">
      <section>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            Carousel goes here
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-4 d-flex justify-content-center">
            <h1 className="header-text">STORE LOCATIONS</h1>
          </div>
          <div className="col-4 d-flex justify-content-center">TASTEA REWARDS</div>
          <div className="col-4 d-flex justify-content-center">CAREERS</div>
        </div>

        <div className="row mx-auto">
          <div className="col-4 d-flex justify-content-center">FUNDRAISING</div>
          <div className="col-4 d-flex justify-content-center">PREMIUM PLEDGE</div>
          <div className="col-4 d-flex justify-content-center">FRANCHISE</div>
        </div>
      </section>

      <section>
        <div className="row mx-auto">
          <h1 className="col-12 d-flex justify-content-center">WHAT IS TASTEA?</h1>
          <h3 className="col-12 d-flex justify-content-center">AN INNOVATIVE &amp; DELICIOUS NEW WAY TO ENJOY SMOOTHIES &amp; TEAS</h3>
        </div>
      </section>
    </div>
    </>
  );
}
