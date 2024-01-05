import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - nordevlab.github.io</title>
        <meta property="og:title" content="About - nordevlab.github.io" />
      </Helmet>
      <div className="about-container1">
        <NavbarInteractive></NavbarInteractive>
        <span className="about-text">write to us</span>
        <span className="about-text01">
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
          <span className="about-text02">
            <span>Little about our company</span>
          </span>
          <span className="about-text04">
            <span>NORDEVLAB</span>
          </span>
        </div>
        <div className="about-container4">
          <span className="about-text06">
            Nordevlab specializes in crafting tailored web pages, mobile
            applications, and software solutions, considering the unique needs
            of each client. Our expertise spans traditional IT solutions as well
            as cutting-edge technologies like Augmented Reality (AR), Virtual
            Reality (VR), blockchain, Artificial Intelligence (AI), and Machine
            Learning (ML). This diverse skill set allows us to automate business
            processes and offer comprehensive solutions for financial companies,
            staying ahead in the dynamic digital landscape.
          </span>
          <span className="about-text07">
            You will discover the works of Quebec, Canadian and international
            artists. Audiovisual and robotic installations, photographs and
            videos, these works that exist in physical space have been specially
            adapted for diffusion in the 3D digital space of our museum.
          </span>
          <span className="about-text08">
            Our team, consisting of experienced developers, designers, and
            managers, possesses the necessary competencies for successfully
            implementing projects of any complexity. We prioritize innovation,
            quality, and efficiency, with each team member contributing unique
            skills to ensure our clients&apos; success.
          </span>
        </div>
      </div>
      <span className="about-text09">CONTACT US</span>
    </div>
  )
}

export default About
