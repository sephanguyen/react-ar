import React, { Component } from 'react';
import * as Sphere from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.min.css';

export default class SphereComponent extends Component {
  sphere;
  constructor(props) {
    super(props);
    console.log(window.innerHeight);
    this.divStyle = {
      width: '100%',
      height: `${window.innerHeight}px`
    };
    this.sphereDiv = element => {
      this.photoSphereViewer = element;
    };
    this.sphereDiv.appendChild = elem => {
      this.subDiv.appendChild(elem);
    };

    this.images = this.props.images;
    this.state = {
      countImage: this.images.length,
      currentImage: 0
    };
  }

  componentDidMount() {
    const headImage = this.images[this.state.currentImage];
    // const container = document.getElementById('target');

    // this.sphere = new PanoViewer(container, {
    //   image: headImage,
    //   gyroMode: 'VR',
    //   projectionType: 'panorama'
    // });
    const fov = 70;
    this.sphere = Sphere({
      parent: this,
      container: this.sphereDiv,
      panorama: headImage,
      time_anim: false,
      caption: 'Screen Image',
      navbar: [
        'zoom',
        'caption',

        {
          id: 'button-previous',
          title: 'Previous',
          className: 'custom-button',
          content: '<',
          onClick: () => {
            const currentImage = this.state.currentImage - 1;
            const { countImage } = this.state;
            if (currentImage >= 0 && currentImage < countImage) {
              this.updateCurrentImage(currentImage);
            }
          }
        },
        {
          id: 'button-next',
          title: 'Next',
          className: 'custom-button',
          content: '>',
          onClick: () => {
            const currentImage = this.state.currentImage + 1;

            if (this.isUpdateImage(currentImage)) {
              this.updateCurrentImage(currentImage);
            }
          }
        },
        {
          id: 'button-next',
          title: 'Close',
          className: 'custom-button',
          content: 'X',
          onClick: () => {
            this.closeImage();
          }
        },
        'caption',
        'fullscreen'
      ],
      navbar_style: {}
    });
  }

  closeImage = () => {
    this.props.onCloseImage();
  };

  isUpdateImage = currentImage => {
    const { countImage } = this.state;
    return currentImage >= 0 && currentImage < countImage;
  };

  updateCurrentImage = currentImage => {
    const imageNext = this.images[currentImage];
    this.setState({
      currentImage
    });
    this.updateView360(imageNext);
  };

  updateView360 = imageNext => {
    this.sphere.setPanorama(imageNext);
  };

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
      </div>
      // <div id="target" ref={this.sphereDiv}></div>
    );
  }
}
