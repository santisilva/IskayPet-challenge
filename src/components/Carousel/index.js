import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel-forked';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const CarouselStores = ({list, height}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerCard}
        onPress={() =>
          navigation.navigate('Task', {store: item})
        }></TouchableOpacity>
    );
  };

  return (
    <Carousel
      layout="default"
      data={list}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
      itemHeight={height}
      renderItem={renderItem}
      autoplay={false}
      loop={true}
      enableSnap={true}
      loopClonesPerSide={5}
      activeDotIndex={2}
      dotsLength={3}
    />
  );
};

export default CarouselStores;

CarouselStores.propTypes = {
  images: PropTypes.array,
  width: PropTypes.any,
  height: PropTypes.number,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  containerCard: {
    width: Dimensions.get('window').width * 0.9,
    height: 150,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
});
