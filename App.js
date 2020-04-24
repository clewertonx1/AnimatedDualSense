import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';





export default function App() {


  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center',}}>

        <Image style={{width: 300, height: 300, resizeMode: "cover" ,position: 'absolute', zIndex: 3}} tintColor={'rgba(255,255,0,0.5)'} source = {require('./src/images/DualSenseRight.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 2}}  source = {require('./src/images/DualSenseRight.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 3}} tintColor={'rgba(255,0,255,0.5)'} source = {require('./src/images/DualSenseLeft.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseLeft.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 3}} tintColor={'rgba(0,255,255,0.5)'} source = {require('./src/images/DualSenseCenter.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute'}} source = {require('./src/images/DualSenseCenter.png')} />
        <Image style={{width: 300, height: 300, position: 'absolute', zIndex: 1}} source = {require('./src/images/DualSense.jpg')} />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
