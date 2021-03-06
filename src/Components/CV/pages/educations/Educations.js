import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-1">
          <div className="card-content">
            <h6>
              <strong><i class="fas fa-graduation-cap"></i> EDUCATION</strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>NVQ Level 3</strong>
                    <span>2010 - 2013</span>
                  </h6>
                  <p className="pt">
                  Electrical engineering
                  </p>
                </blockquote>
              </div>
            
            
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>NVQ Level 2</strong>
                    <span>2008 - 2010</span>
                  </h6>
                  <p className="pt">
                  Air-conditioning and Refrigeration
                  </p>
                </blockquote>
              </div>
            
            
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Other Certs</strong>
                  </h6>
                  <p className="pt">
                  I taught myself how to code and have done various small certifications.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
