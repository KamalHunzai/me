import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Highly dependable Software Engineer and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues.
                    Updates job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.
                    Protects operations by keeping information confidential.</p>
                    <p>Provides information by collecting, analyzing, and summarizing development and service issues.
                    Accomplishes engineering and organization mission by completing related results as needed.
                    Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development life cycle. </p>
                    <p>
                    I have 5 years of professional experience. I have been working with Native iOS, NodeJs,AngularJS, Angular, React,React-Native and AWS/Azure deployments using nginx. I am also proficient with docker and Kubernetes.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites with</p>
                    <p>• HTML,CSS,Sass,JavaScript,Typescript</p>
                    <p>• React,Angular,AngularJS</p>
                    <p>• NodeJS,Express</p>
                    <p>• Wordpress</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Mobile App Development</h3>
                    <p>I have experience building Apps</p>
                    <p>• iOS Development with Swift</p>
                    <p>• React Native apps for iOS and Android</p>
                    <p>• ionic hybrid apps for iOS and Android</p>
                    <p>• Progressive Web apps & Acclerated mobile pages</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I have experience DevOps with</p>
                    <p>• AWS,AZURE,Google Cloud,Heroku </p>
                    <p>• Docker containers,deployments using Kubernetes </p>
                    <p>• Continuous Delivery with Jenkins </p>
                    <p>• Monitoring with Stackdriver </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
