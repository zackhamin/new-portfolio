import React, { Component } from 'react'

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-1">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Naimuri</strong>
                    <span>2021 - Current</span>
                  </h6>
                  <p className="pt">
                 Junior Full Stack Software Engineer, Contact for details.
                  <br></br>
                 Tech: React, Javascript, Node, Docker, AWS, Elastic.
                  </p>
                </blockquote>
              </div>
           
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Co-op bank Mobile App Dev</strong>
                    <span>2020 - 2021</span>
                  </h6>
                  <p className="pt">
                  Created a new Android feature to allow customers to freeze their card incases of loss or theft.<br></br>
                  Daily stand ups and weekly sprint refinements.<br></br>
                  Completing tickets to create and improve the features of the banking app.<br></br>
                  SourceTree, Bitbucket and Atlassian for collaborative VCS.<br></br>
                  Contributing to the refinement sessions to improve the UI and UX of the banking app.<br></br>
                  Rectifying faults in testing classes to improve workflow and accuracy in deployment.<br></br>
                  TDD – Writing unit tests. <br></br>
                  MVVM design pattern – Activity’s, Coordinators, Fragments. <br></br>
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Prior</strong>
                    <span>2008 - 2019</span>
                  </h6>
                  <p className="pt">
                  Prior to my career change I had primarily worked as an air-conditioning engineer and electrician. <br></br>
                  I spent sometime learning about the world of tech.
                  I taught myself SEO best practices, content writing, SEO optimisations and more.
                  
                  
                  
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
