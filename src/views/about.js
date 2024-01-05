import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - nordevlab.github.io</title>
        <meta property="og:title" content="About - nordevlab.github.io" />
      </Helmet>
      <div className="about-container1">
        <header data-thq="thq-navbar" className="about-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="about-desktop-menu">
            <nav className="about-links">
              <span>About</span>
              <span className="about-text01">Features</span>
              <span className="about-text02">Pricing</span>
              <span className="about-text03">Team</span>
              <span className="about-text04">Blog</span>
            </nav>
            <div className="about-buttons">
              <button className="about-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="about-burger-menu">
            <svg id="nb_icon_1" viewBox="0 0 1024 1024" className="about-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="about-mobile-menu">
            <div className="about-nav">
              <div className="about-top">
                <div data-thq="thq-close-menu" className="about-close-menu">
                  <svg
                    id="nb_icon_close"
                    viewBox="0 0 1024 1024"
                    className="about-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="about-links1">
                <Link to="/about" className="about-navlink">
                  About
                </Link>
                <span className="about-text05">Features</span>
                <span className="about-text06">Pricing</span>
                <span className="about-text07">Team</span>
                <span className="about-text08">Blog</span>
              </nav>
              <div className="about-buttons1"></div>
            </div>
            <div className="about-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="about-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <Link to="/" id="logo_text_1" className="about-text09">
            NORDEVLAB
          </Link>
        </header>
        <span className="about-text10">write to us</span>
        <span className="about-text11">
          We hold the belief that the synergy of design and development must not
          only embody aesthetic appeal but also demonstrate optimal
          functionality. This conviction propels us to consistently pursue
          excellence, meticulously attending to the minutest details in every
          project we undertake.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </div>
      <div className="about-container2">
        <div className="about-container3">
          <span className="about-text12">
            <span>Little about our company</span>
          </span>
          <span className="about-text14">
            <span>NORDEVLAB</span>
          </span>
        </div>
        <div className="about-container4">
          <span className="about-text16">
            Nordevlab specializes in crafting tailored web pages, mobile
            applications, and software solutions, considering the unique needs
            of each client. Our expertise spans traditional IT solutions as well
            as cutting-edge technologies like Augmented Reality (AR), Virtual
            Reality (VR), blockchain, Artificial Intelligence (AI), and Machine
            Learning (ML). This diverse skill set allows us to automate business
            processes and offer comprehensive solutions for financial companies,
            staying ahead in the dynamic digital landscape.
          </span>
          <span className="about-text17">
            You will discover the works of Quebec, Canadian and international
            artists. Audiovisual and robotic installations, photographs and
            videos, these works that exist in physical space have been specially
            adapted for diffusion in the 3D digital space of our museum.
          </span>
          <span className="about-text18">
            Our team, consisting of experienced developers, designers, and
            managers, possesses the necessary competencies for successfully
            implementing projects of any complexity. We prioritize innovation,
            quality, and efficiency, with each team member contributing unique
            skills to ensure our clients&apos; success.
          </span>
        </div>
      </div>
      <span className="about-text19">CONTACT US</span>
    </div>
  )
}

export default About
