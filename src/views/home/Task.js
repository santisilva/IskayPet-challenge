import React from 'react';
import {View, Text} from 'react-native';
import Colors from '@colors';

const Task = () => {
  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
   width: 250,
    height: 150,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: .25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
});