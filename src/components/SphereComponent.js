import React, { Component } from 'react';
import * as Sphere from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.min.css';

export default class SphereComponent extends Component {
  constructor(props) {
    super(props);
    this.divStyle = {
      width: '100%',
      height: '600px'
    };
    this.sphereDiv = element => {
      this.photoSphereViewer = element;
    };
    this.sphereDiv.appendChild = elem => {
      this.subDiv.appendChild(elem);
    };
  }

  componentDidMount() {
    Sphere({
      parent: this,
      container: this.sphereDiv,
      panorama:
        'https://photo-sphere-viewer.js.org/assets/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
      navbar: ['autorotate', 'zoom', 'fullscreen']
    });
  }

  render() {
    return (
      <div style={this.divStyle} ref={this.sphereDiv} id="viewer">
        <div ref={node => (this.subDiv = node)} style={this.divStyle}></div>
      </div>
    );
  }
}
