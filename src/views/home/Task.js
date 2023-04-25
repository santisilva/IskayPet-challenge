import React from 'react';
import {View, Text} from 'react-native';

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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: .25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
});