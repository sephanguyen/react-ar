import React, { Component } from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar';
// import { Entity } from 'aframe-react';

export default class ScreenARComponent extends Component {
  appData;
  constructor(props) {
    super(props);
    this.appData = JSON.parse(props.appData);
  }

  componentDidMount() {}

  openImage = () => {
    this.props.history.push('/openImage');
  };

  renderMarker(marker) {
    return (
      <Marker
        key={marker.name}
        parameters={{
          type: 'pattern',
          url: `/data/${marker.markerName}`
        }}
      >
        <a-entity
          gltf-model={`url(models/${marker.dirModel}/${marker.modelName})`}
          scale="0.05 0.05 0.05"
          rotation="0 260 120"
          position="0 0 2"
        ></a-entity>
      </Marker>
    );
  }

  render() {
    const appData = this.appData;

    return (
      <div>
        <AFrameRenderer
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          {/* <Marker
            parameters={{
              type: 'pattern',
              url: '/data/rose.patt'
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
              url: '/data/fish.patt'
            }}
          >
            <a-entity
              gltf-model="url(models/fish/fish.glb)"
              rotation="0 260 120"
              position="0 0 2"
            ></a-entity>
          </Marker> */}
          {appData.map(marker => this.renderMarker(marker))}
        </AFrameRenderer>
        <button className="ui btn-bottom" onClick={this.openImage}>
          OPEN 360 IMAGE
        </button>
      </div>
    );
  }
}
