import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Colors from '@colors';
import Lottie from 'lottie-react-native';
import {PetSpinner} from '@assets/animations';

/**
 * @param  {Function} onPress
 * @param  {String} text
 * @param  {Object} style
 * @param  {Object} textStyle
 * @param  {Boolean} disabled
 * @param  {Boolean} loading
 */

const Button = ({onPress, text, style, textStyle, disabled, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={loading || disabled}>
      {loading ? (
        <Lottie source={PetSpinner} autoPlay loop />
      ) : (
        <Text style={[styles.textButton, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.brown,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 48,
  },
  textButton: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
