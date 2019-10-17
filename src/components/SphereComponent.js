import React, { Component } from 'react';
import * as Sphere from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.min.css';

export default class SphereComponent extends Component {
  sphere;
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
    this.images = this.props.location.state.images;
    this.state = {
      countImage: this.images.length,
      currentImage: 0
    };
  }

  componentDidMount() {
    const headImage = this.images[this.state.currentImage];
    this.sphere = Sphere({
      parent: this,
      container: this.sphereDiv,
      panorama: headImage
      // navbar: ['autorotate', 'zoom', 'fullscreen']
    });
  }
  nextImage = () => {
    const currentImage = this.state.currentImage + 1;
    const imageNext = this.images[currentImage];
    this.setState({
      currentImage
    });
    this.sphere.setPanorama(imageNext);
  };

  render() {
    return (
      <div style={this.divStyle} ref={this.sphereDiv} id="viewer">
        <div ref={node => (this.subDiv = node)} style={this.divStyle}></div>
        <button className="ui btn-bottom">CLOSE IMAGE</button>
        <button className="ui btn-bottom-right" onClick={this.nextImage}>
          Next
        </button>
      </div>
    );
  }
}
