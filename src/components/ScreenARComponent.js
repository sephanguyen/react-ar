import React, { Component } from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar';
// import { Entity } from 'aframe-react';

export default class ScreenARComponent extends Component {
  constructor(props) {
    super(props);

    this.appData = this.props.appData;
    this.state = {
      showOpenImage: false,
      currentIndex: 0
    };
  }

  componentDidMount() {
    const childs = document.querySelectorAll('a-marker');
    childs.forEach((item, index) => {
      item.addEventListener('markerFound', e => {
        console.log(index);
        this.updateShowImage(index);
        this.updateCureentImage(index);
      });
      item.addEventListener('markerLost', e => {
        this.updateShowImage();
      });
    });
  }

  updateCureentImage = index => {
    this.setState({
      currentIndex: index
    });
  };

  updateShowImage = index => {
    this.setState({
      showOpenImage: !this.state.showOpenImage
    });
  };

  componentWillUnmount() {
    let childs = document.querySelectorAll('a-marker');
    childs.forEach(item => {
      item.removeEventListener('markerFound', e => {
        console.log('removed');
      });
      item.removeEventListener('markerLost', e => {
        console.log('removed');
      });
    });
  }

  openImage = () => {
    console.log(this.state);
    const index = this.state.currentIndex;
    this.props.onOpenImage(index);
    // this.props.history.push({
    //   pathname: '/openImage',
    //   state: { images }
    // });
  };

  renderMarker(marker) {
    return (
      <Marker
        key={marker.name}
        parameters={{
          type: 'pattern',
          url: `/data/${marker.markerName}`
        }}
        lightmap
      >
        <a-entity
          gltf-model={`url(models/${marker.dirModel}/${marker.modelName})`}
          scale={marker.scale}
          rotation={marker.rotation}
          position={marker.position}
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
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; debugUIEnabled: false; patternRatio: 0.75;"
          loading-screen="dotsColor: red; backgroundColor: black"
          renderer="logarithmicDepthBuffer: true;  colorManagement: true;	
          sortObjects: true;		
          maxCanvasWidth: 1920;	
          maxCanvasHeight: 1920;"
        >
          {appData.map(marker => this.renderMarker(marker))}
        </AFrameRenderer>
        {this.state.showOpenImage && (
          <button className="ui btn-bottom" onClick={this.openImage}>
            OPEN 360 IMAGE
          </button>
        )}
      </div>
    );
  }
}
