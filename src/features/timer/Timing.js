import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title={10}
          onPress={() => onChangeTime(10)}
          style={{ margin: 10 }}
        />
        <RoundedButton
          size={75}
          title={15}
          onPress={() => onChangeTime(15)}
          style={{ margin: 10 }}
        />
        <RoundedButton
          size={75}
          title={20}
          onPress={() => onChangeTime(20)}
          style={{ margin: 10 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
