import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';

import LoginPage from './pages/LoginPage';


const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.sa}>
        <View style={styles.topLine}>
          <ImageBackground source={require('./assets/topLinelogin.png')} style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
        <View style={styles.login}>
          <LoginPage/>
        </View>
        <View style={styles.botLine}>
          {/* <Text style={styles.tempText}>SDU portal 2019</Text> */}
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  sa:{
    flex: 1,
  },
  login:{
    flex: 3,
    justifyContent: "center",
    height: 400
  },
  topLine:{
    flex: 2,
    height: 500,
  },
  botLine:{
    flex: 1
  },
  tempText:{
    textAlign: "center"
  }
});

export default App;
