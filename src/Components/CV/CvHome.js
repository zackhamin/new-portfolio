import React, { Component } from 'react';
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Experiences from "./pages/experiences/Experiences";
import Educations from "./pages/educations/Educations";
import Portfolios from "./pages/portfolios/Portfolios";


export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row sameHeight">
            <div className="col s12 m12 l4 grey darken-1 sameHeight_child">
                <Profile />
                <Contact />
                <Skills />
            </div>
            <div className="col s12 m12 l8 grey darken-1 sameHeight_child">
                <About />
                <Experiences />
                <Educations />
                <Portfolios />
            </div>
        </div>
      </section>
    )
  }
}
