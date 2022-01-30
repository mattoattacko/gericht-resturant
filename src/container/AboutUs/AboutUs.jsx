import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="Large letter G behind a knife" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about sections little spoon" className="spoon__img" />
        <p className="p__opensans">Gericht pushes the envelope of Japanese cuisine. Taking its influences from our team members’ culinary roots, Gericht blends traditional and innovative techniques to create unique offerings using local ingredients in all of its dishes.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Big knife in the middle of the page that divides the content of About and History sections" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="History sections little spoon" className="spoon__img" />
        <p className="p__opensans">We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;