import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import {Chess} from 'chess.js';
import Background from './Background';
import Piece from './Piece';
import {SIZE} from './Notation';

const {width} = Dimensions.get('window');

function useConst<T>(initialValue: T | (() => T)): T {
  const ref = useRef<{value: T}>();
  if (ref.current === undefined) {
    // Box the value in an object so we can tell if it's initialized even if the initializer
    // returns/is undefined
    ref.current = {
      value:
        typeof initialValue === 'function'
          ? // eslint-disable-next-line @typescript-eslint/ban-types
            (initialValue as Function)()
          : initialValue,
    };
  }
  return ref.current.value;
}

const Board = () => {
  const chess = useConst(() => new Chess());
  const [state, setState] = useState({
    player: 'w',
    board: chess.board(),
  });

  return (
    <View style={styles.container}>
      <Background />
      {state.board.map((row, i) =>
        row.map((square, j) => {
          if (square === null) {
            return null;
          }
          return (
            <Piece
              startPosition={{x: j * SIZE, y: i * SIZE}}
              id={`${square.color}${square.type}` as const}
            />
          );
        }),
      )}
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});
