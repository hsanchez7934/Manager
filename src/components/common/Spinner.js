import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ spinnerSize }) => (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={spinnerSize || 'large'} />
    </View>
);

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
