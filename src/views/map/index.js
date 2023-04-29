import React, {useEffect, useState, useRef} from 'react';
import {View, PermissionsAndroid, Dimensions, Platform} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {PetMap} from '@assets/logos';
import {useRoute} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import geolib from 'geolib'; //no funciono
import turf from '@turf/turf'; //no funciono
import geodist from 'geodist'; // si funciono
import {PetSpinner} from '@assets/animations';
import Lottie from 'lottie-react-native';

const Map = () => {
  const [myPosition, setMyPosition] = useState(null);
  const [nearestStore, setNearestStore] = useState(null);
  const [seeMap, setSeeMap] = useState(false);
  const {params} = useRoute();
  const mapRef = useRef(null);

  const getPermision = async () => {
    const permission = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    );
    return permission;
  };

  useEffect(() => {
    if (myPosition && params.nearestRequest) {
      /*
      const location = turf.point([myPosition.longitude, myPosition.latitude]);

      const stores = turf.featureCollection(
        params.location.map(element =>
          turf.point([element.longitude, element.latitude]),
        ),
      );

      const nearestStoreLocal = turf.nearestPoint(location, stores);

      setNearestStore({
        latitude: nearestStoreLocal.geometry.coordinates[1],
        longitude: nearestStoreLocal.geometry.coordinates[0],
      });*/

      const myLocationLocal = {latitude: myPosition.latitude, longitude: myPosition.longitude};        

      const sortedStores =  params.location.sort((a, b) => {
        const distanceA = geodist(myLocationLocal, {
          latitude: a.latitude,
          longitude: a.longitude,
        });
        const distanceB = geodist(myLocationLocal, {
          latitude: b.latitude,
          longitude: b.longitude,
        });
        return distanceA - distanceB;
      });
      setNearestStore(sortedStores[0]);
    }
  }, [myPosition]);

  useEffect(() => {
    getPermision().then(response => {
      console.log(response);
      if (response === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            console.log('mi posicion', position);
            setMyPosition(position.coords);
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  }, []);

  const handleMapReady = () => {
    console.log('READY', mapRef.current);
    const points = params.nearestStore
      ? [myPosition, nearestStore]
      : [myPosition, ...params.location];
    mapRef.current.fitToCoordinates(points, {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
      animated: true,
    });
  };

  useEffect(() => {
    if (params.nearestRequest) {
      if (nearestStore) {
        setSeeMap(true);
      }
    } else if (myPosition) {
      setSeeMap(true);
    }
  }, [nearestStore, myPosition]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {seeMap ? (
        <MapView
          style={{width: '100%', height: Dimensions.get('window').height - 100}}
          initialRegion={{
            latitude: myPosition.latitude,
            longitude: myPosition.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          ref={mapRef}
          onMapLoaded={nativeEvent => handleMapReady(nativeEvent)}
          showsUserLocation={true}
          showsMyLocationButton={true}>
          {params.nearestRequest && nearestStore ? (
            <Marker
              coordinate={{
                latitude: nearestStore.latitude,
                longitude: nearestStore.longitude,
              }}
              title={'Tienda más cercana'}
              description={'Tienda más cercana'}
              image={PetMap}
              style={{width: 10, height: 10}}
            />
          ) : (
            params.location.map((location, index) => (
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
            ))
          )}
        </MapView>
      ): <Lottie source={PetSpinner} autoPlay loop />
    
    }
      
    </View>
  );
};

export default Map;
