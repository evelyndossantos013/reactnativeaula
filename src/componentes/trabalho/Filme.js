import React, {Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Estilo from "../Estilo";



const styles = StyleSheet.create({
    tinyLogo: {
        width: 110,
        height: 175,
      },

    T1  :{
        flexDirection:"row",
        alignContent:"space-around"
    }
})
export default class Filme extends Component {
    render() {
      return (
        <>
        <Text style={Estilo.txtGrande}>Os Melhores filmes de 2022</Text>
        <View style={styles.T1}>
          <Image
            style={styles.tinyLogo}
            source={require('../imagens/Creed.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/Avatar.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/Boys.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/Panico.jpg')}
          />
        </View>
        </>
      );
    }
  }