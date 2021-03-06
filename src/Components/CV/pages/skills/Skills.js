import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card grey darken-3 z-depth-4">
          <div className="card-content">
            <h6 className="white-text">
              <strong>PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">React</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '49%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JS</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Node</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '25%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Kotlin</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '30%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Python</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '20%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Java</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '35%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
