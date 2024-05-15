// Puzzle.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Puzzle = ({ image }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PuzzlePlayScreen', { image });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
});

export default Puzzle;
