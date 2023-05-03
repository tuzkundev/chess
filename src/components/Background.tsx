import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../common/colors';

interface RowProps {
  row: number;
}

interface SquareProps extends RowProps {
  col: number;
}

const Square = ({row, col}: SquareProps) => {
  const offset = row % 2 === 0 ? 1 : 0;
  // de sole mau
  const backgroundColor =
    (col + offset) % 2 === 0 ? colors.WHITE : colors.BLACK;
  const color = (col + offset) % 2 === 0 ? colors.BLACK : colors.WHITE;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: 'space-between',
      }}>
      <Text style={{color, fontWeight: '500', opacity: col === 0 ? 1 : 0}}>
        {8 - row}
      </Text>
      <Text
        style={{
          color,
          fontWeight: '500',
          alignSelf: 'flex-end',
          opacity: row === 7 ? 1 : 0,
        }}>
        {String.fromCharCode('a'.charCodeAt(0) + col)}
      </Text>
    </View>
  );
};

const Row = ({row}: RowProps) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

const Background = () => {
  return (
    <View style={{flex: 1}}>
      {new Array(8).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
};

export default Background;
