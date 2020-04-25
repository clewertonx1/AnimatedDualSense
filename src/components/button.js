import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Animated   } from 'react-native';


export default function Button(params) {

    const [visible, setVisible] = useState(false)

    // #ed349c ROSA
    // #FFF09D AMARELO
    // #8F9ED7 AZUL ESCURO
    // #00ffff AZUL BB
    // #9b9b9b CINZA
    // #ff6e00 LARANJA
    // #FAFAFA WHITE 
    // #00ff11 VERDE

    const pinkyOpacity = "rgba(255, 0, 242, 0.5)"
    const yellowOpacity = "rgba(238, 255, 0, 0.5)"
    const darkBlueOpacity = "rgba(0, 29, 255, 0.5)"
    const blueOpacity = "rgba(0, 255, 255, 0.5)"
    const redOpacity = "rgba(255, 0, 0, 0.5))"
    const orangeOpacity = "rgba(255, 110, 0, 0.5)"
    const whiteOpacity = "rgba(250, 250, 250, 0.5)"
    const greenOpacity = "rgba(0, 255, 17, 0.5)"

    const pinky = "rgba(255, 0, 242, 1)"
    const yellow = "rgba(238, 255, 0, 1)"
    const darkBlue = "rgba(0, 29, 255, 1)"
    const blue = "rgba(0, 255, 255, 1)"
    const red = "rgba(255, 0, 0, 1))"
    const orange = "rgba(255, 110, 0, 1)"
    const white = "rgba(250, 250, 250, 1)"
    const green = "rgba(0, 255, 17, 1)"

    //params.changeColor(params.side, pinkyRgba)

    function handleChangeColor(color){
        params.changeColor(params.side, color)
        setVisible(!visible)
    }

    return (
   
        <Animated.View style={[styles.buttonView, { right: params.right, bottom: params.bottom}]}>

            <TouchableOpacity onPress={() => setVisible(!visible)} style={[styles.button, styles.buttonLeft, ]}>
            <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(whiteOpacity)} style={[styles.ColorButton, {zIndex: 10, top: 23, backgroundColor: white}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(greenOpacity)} style={[styles.ColorButton, {zIndex: 10, bottom: 23, backgroundColor: green}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(orangeOpacity)} style={[styles.ColorButton, {zIndex: 10, right: 23, backgroundColor: orange}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(redOpacity)} style={[styles.ColorButton, {zIndex: 10, left: 23, backgroundColor: red}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(blueOpacity)} style={[styles.ColorButton, {zIndex: 10, left: 13, top: 14, backgroundColor: blue}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(darkBlueOpacity)} style={[styles.ColorButton, {zIndex: 10, right: 13, bottom: 14, backgroundColor: darkBlue}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(yellowOpacity)} style={[styles.ColorButton, {zIndex: 10, left: 13, bottom: 14, backgroundColor: yellow}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => handleChangeColor(pinkyOpacity)} style={[styles.ColorButton, {zIndex: 10, right: 13, top: 14, backgroundColor: pinky}]}>
                </TouchableOpacity> 
            : null}
                   
        </Animated.View>
    
  );
}

const styles = StyleSheet.create({
  button:{
    borderWidth: 15,
    borderColor: 'rgba(255,255,255, 0.3)',
    backgroundColor: 'rgba(255, 0, 149,0.8)',
    
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute', 
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
  },
  ColorButton:{
      
      backgroundColor: 'red',
      borderColor: 'rgba(255,255,255, 0.5)',
      width: 15,
      height: 15,
      borderRadius: 15,
      position: 'absolute', 
      zIndex: 5,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  buttonText:{
    color: 'white'

  }
});
