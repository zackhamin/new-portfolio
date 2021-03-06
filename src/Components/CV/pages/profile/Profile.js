import React, { Component } from 'react';
import ImgProfile from "../../images/person1.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
            <img className="circle responsive-img"
            src={ImgProfile}
            alt="Ishaq Amin"
            />
        </div>
        <div className="card grey darken-4 z-depth-4 hide-on-large-only">
            <div className="card-content center social">
                <h2 className="grey-text text-lighten-3">
                    <strong>Ishaq Amin</strong>
                </h2>
                <h5 className="grey-text text-lighten-1">Full Stack Engineer</h5>
                <a href="https://facebook.com" target="blank">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="blank">
                    <i className="fab fa-twitter-square fa-2x"></i>
                </a>
                <a href="https://linkedin.com" target="blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
            </div>
        </div>
        <div className="card grey darken-3 z-depth-4">
            <div className="card-content">
                <h6 className="white-text">
                    <strong>PROFILE</strong>
                </h6>
                <hr />
                <p className="grey-text text-lighten-3 pt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            minima quod molestias numquam, cumque eveniet delectus dolore
            laborum molestiae quis possimus eos dignissimos cupiditate ipsam
            sunt doloremque commodi adipisci quasi?
                </p>
            </div>
        </div>
      </div>
    )
  }
}
