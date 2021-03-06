import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-1 hide-on-med-and-down pt">
          <div className="card-content social">
            <h2 className="grey-text text-darken-3">
              <strong>Ishaq Amin</strong>
            </h2>
            <h5 className="grey-text text-darken-1">Full Stack Engineer</h5>
                <a href="https://www.linkedin.com/in/ishaqamin/" target="blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/zackhamin" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
          </div>
        </div>
      </div>
    )
  }
}
