import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {PetMap} from '@assets/logos';
import {useRoute} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

const Map = () => {

  const {params} = useRoute();
  console.log(params.location);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 200}}
        initialRegion={{
          latitude: 39.46975,
          longitude: -0.37739,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {params.location.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={'Tienda'}
            description={'Tienda de prueba'}
            image={PetMap}
            style={{width: 10, height: 10}}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
