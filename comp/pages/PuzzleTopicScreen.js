import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PuzzleList from '../PuzzleList';

const PuzzleTopicScreen = ({ route }) => {
  const { title, image } = route.params;

  // Definir las imágenes de los puzzles según el tema seleccionado
  let puzzles = [];
  if (title === 'Paw Patrol') {
    puzzles = [
      { image: require('../../assets/PawPatrol/1.jpeg'),width: 225, height: 225 },
      { image: require('../../assets/PawPatrol/2.jpeg'), width: 225, height: 225},
      { image: require('../../assets/PawPatrol/3.jpeg'),width: 225, height: 225 },
      { image: require('../../assets/PawPatrol/4.jpeg'),width: 225, height: 225 },
      { image: require('../../assets/PawPatrol/5.jpg'),width: 225, height: 225 },
      { image: require('../../assets/PawPatrol/6.png'),width: 225, height: 225 },
      // Agrega más objetos de puzzles según sea necesario
    ];
  } else if (title === 'Dame Tu Cosita') {
    puzzles = [
      { image: require('../../assets/DameTuCosita/1.jpg'),width: 225, height: 225 },
      { image: require('../../assets/DameTuCosita/2.jpg'),width: 225, height: 225 },
      // Agrega más objetos de puzzles según sea necesario
    ];
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <PuzzleList puzzles={puzzles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
});

export default PuzzleTopicScreen;
