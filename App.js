import React,{useEffect} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {BottomTab} from './src/navigation/BottomTab';
const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return <BottomTab />;
  // return <Text>Hello</Text>
};

export default App;
