import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const CardList = () => {
  return (
    <View style={styles.container}>
      <Card title="Paw Patrol" image={require('../assets/pawP.jpeg')} />
      <Card title="Dame Tu Cosita" image={require('../assets/Dtc.jpeg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
});

export default CardList;
