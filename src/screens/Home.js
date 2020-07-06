import React, {useState, useEffect} from 'react';
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../api';

const Home = (props) => {

  const [name, setName] = useState('');

  useEffect(()=>{
    console.disableYellowBox = true;
  },[]);

  async function onPressEntrar(){

    //Procurar no banco se usuário existe
    const user = await api.findUserByName(name);
    if(user == null){
      const newUser = {
        _id: new Date().getTime(),
        name: name,
        avatar: 'https://placeimg.com/140/140/any'
      }
      await api.createUser(newUser);
      Actions.chat({ user: newUser });
    }else{
      Actions.chat({ user });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seu nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
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