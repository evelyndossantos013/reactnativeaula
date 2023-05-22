import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './Estilo';

function gerarNumeroAleatorio(miny, maxx) {
  return Math.floor(Math.random() * (maxx - miny + 1)) + miny;
}

const Aleatorio = ({ miny, maxx }) => {
  const numeroAleatorio = gerarNumeroAleatorio(miny, maxx);

  return (
    <View>
      <Text style={Estilo.txtGrande}>Número Aleatório: {numeroAleatorio}</Text>
    </View>
  );
};

export default Aleatorio;