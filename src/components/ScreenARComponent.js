import React, { Component } from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar';
// import { Entity } from 'aframe-react';

export default class ScreenARComponent extends Component {
  componentDidMount() {}

  render() {
    return (
      <AFrameRenderer
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-assets>
          <a-asset-item id="fish-obj" src="/models/fish-2.obj"></a-asset-item>
          <a-asset-item id="fish-mtl" src="/models/fish-2.mtl"></a-asset-item>
        </a-assets>
        <Marker
          parameters={{
            type: 'pattern',
            url: '/data/letterA.patt'
          }}
        >
          <a-entity obj-model="obj: #fish-obj; mtl: #fish-mtl"></a-entity>
        </Marker>
      </AFrameRenderer>
    );
  }
}
