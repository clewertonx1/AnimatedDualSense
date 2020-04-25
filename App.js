import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';





export default function App() {


  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <TouchableOpacity style={[styles.button, styles.buttonLeft]}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 3}} tintColor={'rgba(255,255,0,0.5)'} source = {require('./src/images/DualSenseRight.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 2}}  source = {require('./src/images/DualSenseRight.png')} />
        <TouchableOpacity style={[styles.button, styles.buttonRight]}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 3}} tintColor={'rgba(255,0,255,0.5)'} source = {require('./src/images/DualSenseLeft.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseLeft.png')} />
        <TouchableOpacity style={[styles.button, styles.buttonCenter]}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 3}} tintColor={'rgba(0,255,255,0.5)'} source = {require('./src/images/DualSenseCenter.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseCenter.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/background.png')} />
      </View>
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
    borderWidth: 10,
    borderColor: 'rgba(255,255,255, 0.5)',
    width: 50,
    height: 50,
    borderRadius: 30,
    position: 'absolute', 
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLeft:{
    right: 105,
    backgroundColor: 'rgba(255, 0, 149,0.8)'
    
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
