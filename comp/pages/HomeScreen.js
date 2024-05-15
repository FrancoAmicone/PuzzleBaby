import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardList from '../CardList'; // Asegúrate de importar el componente CardList

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Puzzle Viral</Text>
      <Text style={styles.subHeader}>Choose your challenge</Text>
      <CardList /> 
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
  header: {
    fontSize: 54,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
