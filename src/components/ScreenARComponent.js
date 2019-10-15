import React, { Component } from 'react';

export default class ScreenARComponent extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <a-scene
          stats
          embedded
          arjs="trackingMethod: best; debugUIEnabled: false"
        >
          <a-assets>
            <a-asset-item id="fish-obj" src="/models/fish-2.obj"></a-asset-item>
            <a-asset-item id="fish-mtl" src="/models/fish-2.mtl"></a-asset-item>
          </a-assets>
          <a-marker type="pattern" url="data/hiro.patt">
            <a-entity obj-model="obj: #fish-obj; mtl: #fish-mtl"></a-entity>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    );
  }
}
