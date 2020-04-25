import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Animated, } from 'react-native';
import Button from './src/components/button'

export default function App() {


  const teste = () => {
    console.log("teste")
  }

  const testeRef = useRef(teste())
  
  const animatedValueTop = new Animated.Value(0)
  const animatedValueTopRef = useRef(animatedValueTop)
  
  Animated.loop(
    Animated.spring(animatedValueTop, {
      toValue: 1,
      friction: 10,
    }),
    Animated.spring(animatedValueTop, {
      toValue: 0,
      friction: 10,
    }),

  )
     
  
  const translateX = animatedValueTopRef.current.interpolate({
    inputRange: [ 0, 1],
    outputRange: [0, 30],
  })
  

  
 // #ed349c ROSA
 // #FFF09D AMARELO
 // #8F9ED7 AZUL ESCURO
 // #00ffff AZUL BB
 // #9b9b9b CINZA
 // #ff6e00 LARANJA
 // #FAFAFA WHITE 
 // #00ff11 VERDE

  return (
    <View style={styles.container}>
      

        
        
      
        
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} tintColor={'rgba(255,255,0,0.5)'} source = {require('./src/images/DualSenseRight.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}}  source = {require('./src/images/DualSenseRight.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} tintColor={'rgba(255,0,255,0.5)'} source = {require('./src/images/DualSenseLeft.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseLeft.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} tintColor={'rgba(0,255,255,0.5)'} source = {require('./src/images/DualSenseCenter.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseCenter.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/background.png')} />
      

      <Button teste={teste} right={130}></Button>
      <Button right={-130}></Button>
      <Button bottom={90}></Button>
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
