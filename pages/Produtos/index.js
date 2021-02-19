import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Fogao from './../../assets/Fogao4BocasEsmaltecComFornoLimpaFacil.jpg';
import Geladeira from './../../assets/GeladeiraPanasonicFrostFreeDuplex425Litros.jpg';
import LavaLoucas from './../../assets/LavaLoucasElectrolux8Servicos.jpg';


export default function produtos() {
  const DADOS = [
    {
      nome: 'Fogão Esmaltec',
      preco: '469,00',
      imagem: Fogao
    },

    {
      nome: 'Geladeira Panasonic',
      preco: '4.689,00',
      imagem: Geladeira
    },

    {
      nome: 'Lava Louças Electrolux',
      preco: '2.199,00',
      imagem: LavaLoucas
    }
  ]

  function produto({ item }) {
    return <View style={styles.produtoBox}>
      <View style={styles.produtoboxBG}>
        <Image source={item.imagem} style={styles.produtoImagem} />
        <View style={styles.produtoboxText}>
          <Text style={styles.produtoNome}>{item.nome}</Text>
          <Text style={styles.preco}> Preço: {item.preco}</Text>
        </View>
      </View>
    </View>
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'black', marginVertical: 10, fontWeight:'bold' }}> Confira aqui os nossos produtos! </Text>

      <FlatList
        style={{ width: '100%' }}
        data={DADOS}
        renderItem={produto}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  },

  produtoBox: {
  marginBottom: 20,
  width: '100%',
  alignItems: 'center',
  },

  produtoboxBG: {
  width: '80%',
  backgroundColor: 'rgba(255,255,255, .3)',
  paddingBottom: 10,
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderWidth: 2,
  borderColor: 'rgba(255,255,255,.3)',
  },

  produtoNome: {
  fontSize: 24,
  textAlign: 'center'
  },

  preco: {
  textAlign: 'center'
  },

  produtoImagem: {
  width: '100%',
  resizeMode: 'contain',
  height: 200
  },

});