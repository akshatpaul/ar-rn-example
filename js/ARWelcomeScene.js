'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroQuad,
  ViroNode,
  ViroAnimations,
  ViroConstants
} from 'react-viro';

var createReactClass = require('create-react-class');

var ARWelcomeScene = createReactClass({
  getInitialState() {
    return {
      hasARInitialized : false,
      text : "AR APP Loding FOR RNEU20...",
    };
  },
  render: function() {
    return (
      <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>

        {/* Text to show whether or not the AR system has initialized yet*/}
       
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} 
        style={styles.helloWorldTextStyle} />

        <ViroBox position={[0, -.5, -1]}
          animation={{name: "rotate", run: true, loop: true}}
          scale={[.3, .3, .1]} materials={["grid"]} />

<ViroARPlaneSelector >
      <ViroBox position={[0, .5, 0]}
      scale={[.5, .5, .5]} materials={["buzz"]} />
</ViroARPlaneSelector>


        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

        <ViroSpotLight
            innerAngle={5}
            outerAngle={90}
            direction={[0,-1,-.2]}
            position={[0, 3, 1]}
            color="#aaaaaa"
            castsShadow={true}
            />

        <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}} >

          {/* Spotlight to cast light on the object and a shadow on the surface */}
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />


          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2} />

        </ViroNode>

        {/* Node that contains a light, an object and a surface to catch its shadow
          notice that the dragType is "FixedToWorld" so the object can be dragged
          along real world surfaces and points. */}
        <ViroNode position={[.5,-.5,-.5]} dragType="FixedToWorld" onDrag={()=>{}} >

          {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={4}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />

          
          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={4} />

        </ViroNode>

      </ViroARScene>
    );
  },
  _onTrackingUpdated(state, reason) {
    // if the state changes to "TRACKING_NORMAL" for the first time, then
    // that means the AR session has initialized!
    if (!this.state.hasARInitialized && state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        hasARInitialized : true,
        text : "Welcome to RNEU!"
      });
    }
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#DB2C46',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
  buzz: {
    diffuseTexture: require('./res/buzz_ly.png'),
  }
}); 

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
});

module.exports = ARWelcomeScene;
