import React, {Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Estilo from "../Estilo";



const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 125,
        alignItems:"center"
      }
})
export default class Serie extends Component {
    render() {
      return (
        <View style={styles.FlexV4}>
            <Text style={Estilo.txtGrande}>As melhores Series de 2022</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../imagens/silencio.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/Papel.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/Stranger.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/Sintonia.jpg')}
          />
        </View>
      );
    }
  }