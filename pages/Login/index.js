import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Input from './../../componentes/input.js';
import logo from './../../assets/Full Stack Eletro Logo.jpg';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.boxlogin}>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha' senha={true} tipoTeclado='default'/>
        <TouchableOpacity style={styles.entrar}>ENTRAR</TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'soft grey',
  },

  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain'
  },

  entrar: {
    width: 100,
    heigth: 100,
    color: 'white',
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },

  boxlogin: {
    width: 300,
    height: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.5)'
  }

});
