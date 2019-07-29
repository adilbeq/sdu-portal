import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';


const LoginPage = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.inputsWrapper}>
                <TextInput style={styles.input} placeholder="ID"/>
                <View style = {styles.lineStyle} />
                <TextInput style={styles.input} placeholder="Password" textContentType="password"/>
                <View style={styles.roundBtn}>
                    <TouchableOpacity><Text style={styles.btnText}>GO</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 3,
    justifyContent: "center",
  },
  input:{
    margin: 5,
    fontSize: 18,
    padding: 20,
    fontWeight: "bold"
  },
  inputsWrapper:{
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderLeftWidth: 0,
    borderWidth: 1.2,
    borderColor: '#d6d7da',
    marginRight: 95
  },
  lineStyle:{
    borderWidth: 1,
    borderColor:'#d6d7da',
  },
  loginText:{
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: '#73b1d7'
  },
  roundBtn:{
    position: "absolute",
    right: 0,
    top: 50,
    alignItems:'center',
    justifyContent:'center',
    width: 45,
    height: 45,
    backgroundColor:'#73b1d7',
    borderRadius:50,
  },
  btnText:{
    fontWeight: "bold",
    fontSize: 18,
    color: 'white'
  }
});

export default LoginPage;
