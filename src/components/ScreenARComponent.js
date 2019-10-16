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
          </a-assets>
          <Marker
            parameters={{
              type: 'pattern',
              url: '/data/letterA.patt'
            }}
          >
            <a-entity obj-model="obj: #rose-obj; mtl: #rose-mtl"></a-entity>
          </Marker>
        </AFrameRenderer>
        <button className="ui btn-bottom" onClick={this.openImage}>
          OPEN 360 IMAGE
        </button>
      </div>
    );
  }
}
