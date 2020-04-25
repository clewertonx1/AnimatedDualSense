import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Animated, } from 'react-native';
import Button from './src/components/button'

export default function App() {

  const [DualSenseRightColor, setDualSenseRightColor] = useState("rgba(255, 255 255, 0)")
  const [DualSenseLeftColor, setDualSenseLeftColor] = useState("rgba(255, 255, 255, 0)")
  const [DualSenseCenterColor, setDualSenseCenterColor] = useState("rgba(255, 255, 255, 0)")

  const pinkyRgba = "rgba(255, 0, 242, 0.5)"
  const yellowRgba = "rgba(238, 255, 0, 0.5)"
  const darkBlueRgba = "rgba(0, 29, 255, 0.5)"
  const blueRgba = "rgba(0, 255, 255, 0.5)"
  const redRgba = "rgba(255, 0, 0, 0.5))"
  const orangeRgba = "rgba(255, 110, 0, 0.5)"
  const whiteRgba = "rgba(250, 250, 250, 0.5)"
  const greenRgba = "rgba(0, 255, 17, 0.5)"

  const changeColor = (side, color) => {
    if(side==="Left"){
      setDualSenseLeftColor(color)
    }
    if(side==="Right"){
      setDualSenseRightColor(color)
    }
    if(side==="Center"){
      setDualSenseCenterColor(color)
    }
  }

   


  
 // #ed349c ROSA
 // #eeff00 AMARELO
 // #8F9ED7 AZUL ESCURO
 // #00ffff AZUL BB
 // #9b9b9b CINZA
 // #ff6e00 LARANJA
 // #FAFAFA WHITE 
 // #00ff11 VERDE

  return (
    <View style={styles.container}>
        
      <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} tintColor={DualSenseRightColor} source = {require('./src/images/DualSenseRight.png')} />
      <Image style={{width: 300, height: 300, position: 'absolute'}}  source = {require('./src/images/DualSenseRight.png')} />
      <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} tintColor={DualSenseLeftColor} source = {require('./src/images/DualSenseLeft.png')} />
      <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseLeft.png')} />
      <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} tintColor={DualSenseCenterColor} source = {require('./src/images/DualSenseCenter.png')} />
      <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseCenter.png')} />

      <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/background.png')} />
      

      <Button side={"Left"} changeColor={changeColor} right={130}></Button>
      <Button side={"Right"} changeColor={changeColor} right={-130}></Button>
      <Button side={"Center"} changeColor={changeColor} bottom={90}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf9ff',
    
  },
  
});
