import React, { Component } from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar';
// import { Entity } from 'aframe-react';

export default class ScreenARComponent extends Component {
  componentDidMount() {}

  openImage = () => {
    this.props.history.push('/openImage');
  };

  render() {
    return (
      <div>
        <AFrameRenderer
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          <a-assets>
            <a-asset-item
              id="rose-obj"
              src="/models/rose/rose.obj"
            ></a-asset-item>
            <a-asset-item
              id="rose-mtl"
              src="/models/rose/rose.mtl"
            ></a-asset-item>
            <a-asset-item id="fish-obj" src="/models/fish-2.obj"></a-asset-item>
            <a-asset-item id="fish-mtl" src="/models/fish-2.mtl"></a-asset-item>
            <a-asset-item
              id="smiley"
              src="/models/SmilingFace.gltf"
            ></a-asset-item>
            <a-asset-item
              id="animated-asset"
              src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"
            ></a-asset-item>
          </a-assets>
          <Marker
            parameters={{
              type: 'pattern',
              url: '/data/letterA.patt'
            }}
          >
            <a-entity
              gltf-model="url(models/rose/rose.glb)"
              scale="0.2 0.2 0.2"
            ></a-entity>
          </Marker>
          <Marker
            parameters={{
              type: 'pattern',
              url: '/data/letterB.patt'
            }}
          >
            <a-entity obj-model="obj: #fish-obj; mtl: #fish-mtl"></a-entity>
          </Marker>
          <Marker
            parameters={{
              type: 'pattern',
              url: '/data/letterC.patt'
            }}
          >
            <a-entity gltf-model="#animated-asset" rotation="180 0 0">
              <a-animation
                attribute="position"
                dur="5000"
                direction="alternate"
                from="0 1 0"
                to="0 5 0"
                repeat="indefinite"
              ></a-animation>
            </a-entity>
          </Marker>
        </AFrameRenderer>
        <button className="ui btn-bottom" onClick={this.openImage}>
          OPEN 360 IMAGE
        </button>
      </div>
    );
  }
}
