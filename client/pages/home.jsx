import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Home(props) {
  const styles = {
    footerLink: { color: 'white', textDecoration: 'none', margin: '0rem .75rem' }
  };
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
        <div className="row mx-auto d-flex justify-content-center">
          <div>
            <div className="col d-flex justify-content-center">
              <img src="store-locations.png" alt="Store Locations"/>
            </div>
            <div className="col d-flex justify-content-center">
              <h1 className="header-text">STORE LOCATIONS</h1>
            </div>
          </div>

          <div>
            <div className="col d-flex justify-content-center">
              <img src="rewards.png" alt="Tastea Rewards"/>
            </div>
            <div className="col d-flex justify-content-center">
              <h1 className="header-text">TASTEA REWARDS</h1>
            </div>
          </div>

          <div>
            <div className="col d-flex justify-content-center">
              <img src="careers.png" alt="Careers"/>
            </div>
            <div className="col d-flex justify-content-center">
              <Button variant="light">CAREERS</Button>
            </div>
          </div>

          <div className="w-100"></div>

          <div>
            <div className="col d-flex justify-content-center">
              <img src="fundraising.png" alt="Fundraising"/>
            </div>
            <div className="col d-flex justify-content-center">
              <h1 className="header-text">FUNDRAISING</h1>
            </div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">
              <img src="pledge.png" alt="Pledge"/>
            </div>
            <div className="col d-flex justify-content-center">
              <h1 className="header-text">PREMIUM PLEDGE</h1>
            </div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">
              <img src="franchise.png" alt="Franchise"/>
            </div>
            <div className="col d-flex justify-content-center">
              <h1 className="header-text">FRANCHISE</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-tastea">
        <div className="row mx-auto" style={{ textAlign: 'center', color: 'white' }}>
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
        <div className="row mx-auto d-flex justify-content-center">
          <div>
            <div className="col d-flex justify-content-center">
              <a href="https://www.instagram.com/p/COs3tKSh6kf/">
                <img src="insta_img_1.jpg" alt="Happy National Shrimp day! To celebrate TODAY only, 5/10, we&apos;re offering buy one, get one FREE on a Regular size Shrimp On It!!"/>
              </a>

              <a href="https://www.instagram.com/p/COqamL9hXUf/">
                <img src="insta_img_2.jpg" alt="Happy Mother&apos;s Day to all the amazing moms and mom-like figures in your life! Treat her to refreshing drinks today"/>
              </a>
            </div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">
              <a href="https://www.instagram.com/p/COqamL9hXUf/">
                <img src="insta_img_2.jpg" alt="Happy Mother&apos;s Day to all the amazing moms and mom-like figures in your life! Treat her to refreshing drinks today"/>
              </a>
            </div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">Hello</div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">Hello</div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">Hello</div>
          </div>
          <div>
            <div className="col d-flex justify-content-center">Hello</div>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
        </div>

        <div className="row mx-auto">
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
          <div className="col d-flex justify-content-center">Hello</div>
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
                <li><a style={styles.footerLink} href="/">Our Story</a></li>
                <li><a style={styles.footerLink} href="/">Our Premium Pledge</a></li>
                <li><a style={styles.footerLink} href="/">Stories &amp; News</a></li>
              </ul>
            </div>

            <div className="col-3">
              <ul className="footer-list">
                <li><a style={styles.footerLink} href="/">Tastea Rewards</a></li>
                <li><a style={styles.footerLink} href="/">Customer Service</a></li>
                <li><a style={styles.footerLink} href="/">Our Menu</a></li>
              </ul>
            </div>

            <div className="col-3">
              <ul className="footer-list">
                <li><a style={styles.footerLink} href="/">Our Location</a></li>
                <li><a style={styles.footerLink} href="/">Join Our Team</a></li>
                <li><a style={styles.footerLink} href="/">Franchise with Tastea</a></li>
              </ul>
            </div>

            <div className="col-3">
              <ul className="footer-list">
                <li><a style={styles.footerLink} href="/">Fundraising</a></li>
                <li><a style={styles.footerLink} href="/">Catering</a></li>
                <li><a style={styles.footerLink} href="/">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-12 d-flex justify-content-center">
            <i className="fab fa-facebook"></i><i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-12 d-flex justify-content-center">
            <div className="d-inline">
              <a style={styles.footerLink} href="/">Privacy Statements</a>
              <a style={styles.footerLink} href="/">Terms of Use</a>
              <a style={styles.footerLink} href="/">Tastea Rewards</a>
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
