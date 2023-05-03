import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

export const SIZE = width / 8;

const Notation = () => {
  return (
    <View>
      <Text>Notation</Text>
    </View>
  );
};

export default Notation;
