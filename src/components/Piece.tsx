import {Chess} from 'chess.js';
import React, {useCallback} from 'react';
import {StyleSheet, Image} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Vector} from 'react-native-redash';

import {SIZE} from './Notation';

const styles = StyleSheet.create({
  piece: {
    width: SIZE,
    height: SIZE,
  },
});
type Player = 'b' | 'w';
type Type = 'q' | 'r' | 'n' | 'b' | 'k' | 'p';
type Piece = `${Player}${Type}`;
type Pieces = Record<Piece, ReturnType<typeof require>>;
export const PIECES: Pieces = {
  br: require('../assets/br.png'),
  bp: require('../assets/bp.png'),
  bn: require('../assets/bn.png'),
  bb: require('../assets/bb.png'),
  bq: require('../assets/bq.png'),
  bk: require('../assets/bk.png'),
  wr: require('../assets/wr.png'),
  wn: require('../assets/wn.png'),
  wb: require('../assets/wb.png'),
  wq: require('../assets/wq.png'),
  wk: require('../assets/wk.png'),
  wp: require('../assets/wp.png'),
};

interface PieceProps {
  id: Piece;
  startPosition: Vector;
  //   chess: Chess;
  //   onTurn: () => void;
  //   enabled: boolean;
}

const Piece = ({id, startPosition}: PieceProps) => {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: SIZE,
        height: SIZE,
        transform: [
          {translateX: startPosition.x},
          {translateY: startPosition.y},
        ],
      }}>
      <Image source={PIECES[id]} style={styles.piece} />
    </Animated.View>
  );
};

export default Piece;
