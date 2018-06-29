import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { titleStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={titleStyle}>
        {headerText}
      </Text>
    </View>
  );
};


const styles = {
  titleStyle: {
    fontSize: 20,
    color: '#fff'
  },
  viewStyle: {
    height: 60,
    backgroundColor: '#4f0900',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
