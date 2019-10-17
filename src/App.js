import React, { Component } from 'react';
import './App.css';
import SphereComponent from './components/SphereComponent';
import ScreenARComponent from './components/ScreenARComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.appData = JSON.parse(props.appData);
    this.state = {
      images: [],
      isOpenImage: false
    };
  }

  openImage = index => {
    const images = this.appData[index].images360;
    this.setState({ images, isOpenImage: true });
  };

  closeImage = () => {
    this.setState({ isOpenImage: false });
  };

  render() {
    return (
      <div>
        <div style={!this.state.isOpenImage ? {} : { display: 'none' }}>
          <ScreenARComponent
            appData={this.appData}
            onOpenImage={this.openImage}
          ></ScreenARComponent>
        </div>
        {this.state.isOpenImage && (
          <SphereComponent
            images={this.state.images}
            onCloseImage={this.closeImage}
          ></SphereComponent>
        )}
      </div>
    );
  }
}

export default App;
