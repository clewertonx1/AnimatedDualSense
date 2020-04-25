import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Animated   } from 'react-native';


export default function Button(params) {

 // #ed349c ROSA
 // #FFF09D AMARELO
 // #8F9ED7 AZUL ESCURO
 // #00ffff AZUL BB
 // #9b9b9b CINZA
 // #ff6e00 LARANJA
 // #FAFAFA WHITE 
 // #00ff11 VERDE

  return (
        <View style={[styles.buttonView, {right: params.right}]}>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.button, styles.buttonLeft ]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, top: 23, backgroundColor: '#ed349c'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, bottom: 23, backgroundColor: '#ffd91c'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, right: 23, backgroundColor: '#ff1e1e'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, left: 23, backgroundColor: '#00ffff'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, left: 13, top: 14, backgroundColor: '#9b9b9b'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, left: 13, bottom: 14, backgroundColor: '#FAFAFA'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, right: 13, bottom: 14, backgroundColor: '#8b1eff'}]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleMenu()} style={[styles.ColorButton, {zIndex: 10, right: 13, top: 14, backgroundColor: '#00ff11'}]}>
          </TouchableOpacity> 
        </View>
    
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  button:{
    borderWidth: 15,
    borderColor: 'rgba(255,255,255, 1)',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute', 
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView:{
    zIndex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonLeft:{
    backgroundColor: 'rgba(255, 0, 149,0.8)',
    
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
  buttonRight:{
    left: 105,
    backgroundColor: 'rgba(255, 0, 149,0.8)'
  },
  buttonCenter:{
    bottom: 60,
    backgroundColor: 'rgba(255, 0, 149,0.8)'
  },
  buttonText:{
    color: 'white'

  }
});
