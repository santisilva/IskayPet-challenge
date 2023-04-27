import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const index = ({children, style, onPress, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.6 : 1}
      style={[styles.card, style]}
      {...props}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
