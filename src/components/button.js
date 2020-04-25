import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Animated   } from 'react-native';


export default function Button(params) {

    const [visible, setVisible] = useState(false)
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
 // #ed349c ROSA
 // #FFF09D AMARELO
 // #8F9ED7 AZUL ESCURO
 // #00ffff AZUL BB
 // #9b9b9b CINZA
 // #ff6e00 LARANJA
 // #FAFAFA WHITE 
 // #00ff11 VERDE

    const animatedValue = new Animated.Value(0)
    const animatedValueRef = useRef(animatedValue)
  
    const color = animatedValueRef.current.interpolate({
      inputRange: [ 0, 1],
      outputRange: ["rgba(255,255,255, 0.3)", "rgba(255,255,255, 1)"],
    })
    
    async function buttonOpen(){
    
        setVisible(!visible)  
    }

    return (
   
        <Animated.View style={[styles.buttonView, { right: params.right, bottom: params.bottom}]}>

            <AnimatedTouchable onPress={() => buttonOpen()} style={[styles.button, styles.buttonLeft, {borderColor: color }]}>
            <Text style={styles.buttonText}>+</Text>
            </AnimatedTouchable>

            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, top: 23, backgroundColor: '#ed349c'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, bottom: 23, backgroundColor: '#ffd91c'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, right: 23, backgroundColor: '#ff1e1e'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, left: 23, backgroundColor: '#00ffff'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, left: 13, top: 14, backgroundColor: '#9b9b9b'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, right: 13, bottom: 14, backgroundColor: '#8b1eff'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, left: 13, bottom: 14, backgroundColor: '#FAFAFA'}]}>
                </TouchableOpacity>
            : null}
            {visible ? 
                <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, right: 13, top: 14, backgroundColor: '#00ff11'}]}>
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
