import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faEnvelope, faKey);

function App() {
  return (
    <div className="App">
      <div className="top-container" id="header">
        <h1 className="name">
          Kelsey M. Crawford
        </h1>
        <div className="hook-container">
          <h3 className="hooks">Biologist</h3>
          <span className="hooks">&#8226;</span>
          <h3 className="hooks">Conservationist</h3>
          <span className="hooks">&#8226;</span>
          <h3 className="hooks">Advocate</h3>
        </div>
        <div className="arrow">
          <a href="#bottom" class="far fa-arrow-alt-circle-down fa-4x"></a>
        </div>
      </div>
      <div className="bottom-container" id="bottom">
        <div className="skills">
          <h1>
            Top Skills
          </h1>
          <div className="skill-list">
              <p className="skill">Biology</p>
              <p className="skill">Conservation</p>
              <p className="skill">Sustainability</p>
              <p className="skill">Leadership</p>
              <p className="skill">Outreach</p>
              <p className="skill">Ecology</p>
          </div>
        </div>
        <div className="about">
          <img src={require("./images/kelsey.JPG")} />
          <div className="about-text">
            <h1>Who I've worked with</h1>
            <div className="employers">
              <h2>Date</h2>
              <h2>Employer</h2>
            </div>
            <div className="employers">
              <h2>Date</h2>
              <h2>Employer</h2>
            </div>
            <div className="employers">
              <h2>Date</h2>
              <h2>Employer</h2>
            </div>
            <div className="employers">
              <h2>Date</h2>
              <h2>Employer</h2>
            </div>
            <div className="employers">
              <h2>Date</h2>
              <h2>Employer</h2>
            </div>
            <div className="employers">
              <h2>Date</h2>
              <h2>Employer</h2>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={require("./images/CRSullivan-Resume.pdf")} class="far fa-arrow-alt-circle-right">
              <h2>View my full Resume</h2>
            </a>
          </div>
        </div>
        <div className="second-arrow">
          <a href="#last" class="far fa-arrow-alt-circle-down fa-4x"></a>
          <a href="#header" class="far fa-arrow-alt-circle-up fa-4x"></a>
        </div>
      </div>
      <div className="last-container" id="last">
        <div className="about-me">
            <h1>A little more about me...</h1>
          <div className="content">
            <h2>My Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit quis diam sed imperdiet. Duis tincidunt tellus eget tincidunt sodales. Duis tortor ligula, interdum in orci quis, sollicitudin bibendum magna. Mauris tincidunt leo sit amet congue porttitor. Nullam non lorem erat. Fusce molestie, dui eget porta viverra, purus nulla rhoncus neque, ut viverra quam risus ut felis. Nam volutpat varius elit, eu porttitor odio. Mauris auctor facilisis orci in accumsan. Vivamus congue nisi at tellus egestas rhoncus. Etiam faucibus massa sed tellus vehicula eleifend. Nulla at erat id tellus varius rutrum.
              Praesent interdum metus eu iaculis rutrum.
            </p>
            <h2>My Background</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit quis diam sed imperdiet. Duis tincidunt tellus eget tincidunt sodales. Duis tortor ligula, interdum in orci quis, sollicitudin bibendum magna. Mauris tincidunt leo sit amet congue porttitor. Nullam non lorem erat. Fusce molestie, dui eget porta viverra, purus nulla rhoncus neque, ut viverra quam risus ut felis. Nam volutpat varius elit, eu porttitor odio. Mauris auctor facilisis orci in accumsan. Vivamus congue nisi at tellus egestas rhoncus. Etiam faucibus massa sed tellus vehicula eleifend. Nulla at erat id tellus varius rutrum.
              Praesent interdum metus eu iaculis rutrum. Sed ac congue eros. Maecenas eget sem dignissim, aliquam ligula non, semper nulla. Vestibulum a ex tellus. Vivamus molestie, urna at scelerisque consectetur, augue libero scelerisque nibh, et blandit arcu nisi et libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ut mi sollicitudin, cursus urna ut, egestas odio. Sed pharetra orci at elit maximus, in elementum justo lobortis. Nulla bibendum aliquet elementum. Aenean augue odio, ornare non magna sed, egestas vulputate ipsum. Suspendisse sagittis ornare elit, ac elementum lacus rhoncus quis.
              Pellentesque vel sodales justo. 
            </p>
          </div>
        </div>
        <div className="third-arrow">
          <a href="#bottom" class="far fa-arrow-alt-circle-up fa-4x"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
