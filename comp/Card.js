import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, image }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PuzzleTopicScreen', { title, image });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el título
    padding: 10,
  },
});

export default Card;
