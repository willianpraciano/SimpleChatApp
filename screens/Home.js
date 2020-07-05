import React from 'react';
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = (props) => {

  function onPressEntrar(){
    Actions.chat();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seu nome</Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity onPress={onPressEntrar}>
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    padding: 30,
  },
  Text:{
    marginTop: 10,
    fontSize: 20,
  },
  input:{
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  button:{
    marginTop: 10,
    fontSize: 20,
  }
});