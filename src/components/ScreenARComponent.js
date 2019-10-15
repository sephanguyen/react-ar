import React, { Component } from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar';
// import { Entity } from 'aframe-react';

export default class ScreenARComponent extends Component {
  componentDidMount() {}

  // <div>
  //       <a-scene
  //         stats
  //         embedded
  //         arjs="trackingMethod: best; debugUIEnabled: false"
  //       >
  //         <a-assets>
  //           <a-asset-item id="fish-obj" src="/models/fish-2.obj"></a-asset-item>
  //           <a-asset-item id="fish-mtl" src="/models/fish-2.mtl"></a-asset-item>
  //         </a-assets>
  //         <a-marker preset="hiro">
  //           <a-entity obj-model="obj: #fish-obj; mtl: #fish-mtl"></a-entity>
  //         </a-marker>
  //         <a-entity camera></a-entity>
  //       </a-scene>
  //     </div>
  render() {
    return (
      <AFrameRenderer inherent={true}>
        <a-assets>
          <a-asset-item id="fish-obj" src="/models/fish-2.obj"></a-asset-item>
          <a-asset-item id="fish-mtl" src="/models/fish-2.mtl"></a-asset-item>
        </a-assets>
        <Marker parameters={{ preset: 'hiro' }}>
          <a-entity obj-model="obj: #fish-obj; mtl: #fish-mtl"></a-entity>
          {/* <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="2000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box> */}
        </Marker>
      </AFrameRenderer>
    );
  }
}
