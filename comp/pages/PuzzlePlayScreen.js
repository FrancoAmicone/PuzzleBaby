import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Draggable from 'react-native-draggable';

const PuzzlePlayScreen = ({ route }) => {
  const { image } = route.params;
  const [pieces, setPieces] = useState([]);

// Función para dividir la imagen en piezas
const divideImageIntoPieces = () => {
  const tempPieces = [];
  const rows = 2; // Número de filas
  const cols = 2; // Número de columnas

  // Calcular el ancho y alto de cada pieza
  const pieceWidth = image.width / cols;
  const pieceHeight = image.height / rows;

  // Generar las piezas
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * pieceWidth;
      const y = i * pieceHeight;

      tempPieces.push({
        x,
        y,
        width: pieceWidth,
        height: pieceHeight,
      });
    }
  }

  setPieces(tempPieces);
};


  // Función para renderizar las piezas del rompecabezas
  const renderPuzzlePieces = () => {
    return (
      <View style={styles.puzzleContainer}>
        {pieces.map((piece, index) => (
          <Draggable key={index} x={piece.x} y={piece.y} renderSize={80} renderColor='black' isCircle onLongPress={() => console.log('long press')}>
            <Image source={image} style={[styles.piece, { width: piece.width, height: piece.height }]} />
          </Draggable>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Pluzzle Tittle</Text>
      <Image source={image} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={divideImageIntoPieces}>
        <Text style={styles.buttonText}>Start Puzzle</Text>
      </TouchableOpacity>
      {pieces.length > 0 && renderPuzzlePieces()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  puzzleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  piece: {
    resizeMode: 'cover',
    margin: 5,
  },
});

export default PuzzlePlayScreen;
