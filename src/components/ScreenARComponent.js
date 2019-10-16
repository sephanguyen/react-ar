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
          </a-assets>
          <Marker
            parameters={{
              type: 'pattern',
              url: '/data/letterA.patt'
            }}
          >
            <a-entity
              gltf-model="url(models/rose/rose.glb)"
              scale="0.05 0.05 0.05"
              rotation="0 260 120"
              position="0 0 2"
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
        </AFrameRenderer>
        <button className="ui btn-bottom" onClick={this.openImage}>
          OPEN 360 IMAGE
        </button>
      </div>
    );
  }
}
