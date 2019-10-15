import React, { Component } from 'react';
import {
  Scene,
  AmbientLight,
  Camera,
  WebGLRenderer,
  Color,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial
} from 'three';
import { AFrameRenderer, Marker } from 'react-web-ar';
export default class ScreenARComponent extends Component {
  componentDidMount() {
    // // === THREE.JS CODE START ===
    // var scene = new Scene();
    // let ambientLight = new AmbientLight(0xcccccc, 0.5);
    // scene.add(ambientLight);
    // let camera = new Camera();
    // scene.add(camera);
    // var renderer = new WebGLRenderer();
    // renderer.setClearColor(new Color('lightgrey'), 0);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.domElement.style.position = 'absolute';
    // renderer.domElement.style.top = '0px';
    // renderer.domElement.style.left = '0px';
    // this.mount.appendChild(renderer.domElement);
    // var geometry = new BoxGeometry(1, 1, 1);
    // var material = new MeshBasicMaterial({ color: 0x00ff00 });
    // var cube = new Mesh(geometry, material);
    // scene.add(cube);
    // camera.position.z = 5;
    // var animate = function() {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // };
    // animate();
  }

  render() {
    return (
      <div>
        <a-scene embedded arjs="sourceType: webcam;">
          <a-assets>
            <a-asset-item
              id="smiley"
              src="https://cdn.rawgit.com/KhronosGroup/glTF-Sample-Models/9176d098/1.0/SmilingFace/glTF/SmilingFace.gltf"
            ></a-asset-item>
          </a-assets>

          <a-marker type="pattern" url="data/hiro.patt">
            <a-entity gltf-model="#smiley" rotation="180 0 0">
              <a-animation
                attribute="position"
                dur="5000"
                direction="alternate"
                from="0 1 0"
                to="0 5 0"
                repeat="indefinite"
              ></a-animation>
            </a-entity>
          </a-marker>

          <a-marker type="pattern" url="data/kanji.patt">
            <a-entity gltf-model="#smiley" rotation="180 0 0">
              <a-animation
                attribute="position"
                dur="5000"
                direction="alternate"
                from="0 1 0"
                to="0 5 0"
                repeat="indefinite"
              ></a-animation>
            </a-entity>
          </a-marker>

          <a-marker type="pattern" url="data/letterA.patt">
            <a-entity gltf-model="#smiley" rotation="180 0 0">
              <a-animation
                attribute="position"
                dur="5000"
                direction="alternate"
                from="0 1 0"
                to="0 5 0"
                repeat="indefinite"
              ></a-animation>
            </a-entity>
          </a-marker>

          <a-entity camera></a-entity>
        </a-scene>
      </div>
    );
  }
}
