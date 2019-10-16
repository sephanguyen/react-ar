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
            <a-entity
              gltf-model="url(models/fish/fish.glb)"
              scale="0.05 0.05 0.05"
              rotation="0 260 120"
              position="0 0 2"
            ></a-entity>
          </Marker>
          <Marker
            parameters={{
              type: 'pattern',
              url: '/data/letterC.patt'
            }}
          >
            <a-entity
              gltf-model="url(models/smillingFace/SmilingFace.glb)"
              scale="0.05 0.05 0.05"
              rotation="0 260 120"
              position="0 0 2"
            ></a-entity>
          </Marker>
        </AFrameRenderer>
        <button className="ui btn-bottom" onClick={this.openImage}>
          OPEN 360 IMAGE
        </button>
      </div>
    );
  }
}
