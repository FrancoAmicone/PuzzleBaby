import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Puzzle from './Puzzle';

const PuzzleList = ({ puzzles }) => {
  const renderPuzzleItem = ({ item }) => <Puzzle image={item.image} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={puzzles}
        renderItem={renderPuzzleItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.puzzleList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  puzzleList: {
    alignItems: 'center',
  },
});

export default PuzzleList;
