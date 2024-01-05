import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>nordevlab.github.io</title>
        <meta property="og:title" content="nordevlab.github.io" />
      </Helmet>
      <div className="home-container1 back">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name1"></NavbarInteractive>
        <div className="home-container2">
          <div id="tblock" className="home-container3">
            <Link to="/about" className="home-text">
              ABOUT
            </Link>
            <span className="home-text1">CONTACT US</span>
            <span className="home-text2">SERVICES</span>
          </div>
          <div id="text_to_hide" className="home-container4">
            <span className="home-text3">
              <span>DO</span>
            </span>
            <span className="home-text5">
              <span>WORKING</span>
            </span>
            <span className="home-text7">
              <span>EXPERIENCE</span>
            </span>
          </div>
        </div>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
  var element = document.getElementById('tblock');
  var element1= document.getElementById('logo_text');
  var tth= document.getElementById('text_to_hide');
  document.getElementById('nb_icon').onclick = function() {
    element.style.transform = 'translateX(242px)';
    element1.style.transform = 'translateX(242px)';
    tth.style.transform = 'scale(0)'
  };
  document.getElementById('nb_icon_close').onclick = function() {
    element.style.transform = 'translateX(0px)';
    element1.style.transform = 'translateX(0px)';
    tth.style.transform = 'scale(1)'
  };
</script>`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
