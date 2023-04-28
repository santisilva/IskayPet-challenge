import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {resetStores, getStores} from '@services/stores';
import {useNavigation} from '@react-navigation/native';
import {Card} from '@components';
import {LogoPng, MapaIcon} from '../../assets/logos';
import Colors from '@colors';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    /*
    resetStores();
    getStores().then(response => {
      console.log(response.data);
    });
    */
  }, []);

  const goToStore = store => {
    navigation.navigate('Store', {store});
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 80, paddingHorizontal: 30}}>
      <Image source={LogoPng} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Map', {
            location: stores.map(element => element.location),
          })
        }>
        <Text style={styles.textButton}>Ver todas las tiendas</Text>
      </TouchableOpacity>
      {stores.map(store => (
        <Card key={store.id} style={{height: 'auto'}}>
          <Text style={styles.titleStore}>{store.name}</Text>
          <View style={styles.containerTasks}>
            <View>
              <Text style={styles.textTasksTitle}>Tareas:</Text>
              <Text style={styles.textTaskStatus}>
                {store.tasks.filter(task => task.status === 'Pendiente').length}{' '}
                pendientes
              </Text>
              <Text style={styles.textTaskStatus}>
                {
                  store.tasks.filter(task => task.status === 'En proceso')
                    .length
                }{' '}
                en proceso
              </Text>
              <Text style={styles.textTaskStatus}>
                {store.tasks.filter(task => task.status === 'Terminada').length}{' '}
                terminadas
              </Text>
            </View>
            <TouchableOpacity
              style={styles.map}
              onPress={() =>
                navigation.navigate('Map', {location: [store.location]})
              }>
              <Image
                source={MapaIcon}
                style={{
                  width: 170,
                  height: 120,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              />
              <Text>Ver mapa</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => goToStore(store)}
            style={styles.button}>
            <Text style={styles.textButton}>Ver tienda</Text>
          </TouchableOpacity>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 50,
  },
  containerTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  titleStore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.brown,
    marginBottom: 25,
  },
  textTasksTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkBrown,
  },
  textTaskStatus: {
    fontWeight: 'regular',
    marginTop: 15,
  },
  map: {
    width: 170,
    height: 120,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    marginTop: 25,
    height: 48,
    backgroundColor: Colors.brown,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
  },
  textButton: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
});

const stores = [
  {
    id: 1,
    name: 'Tienda 1',
    location: {
      latitude: 39.46975,
      longitude: -0.37739,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    tasks: [
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        status: 'Pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'En proceso',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'Terminada',
      },
      {
        id: 4,
        name: 'Tarea 4',
        description: 'Descripcion de la tarea 4',
        status: 'Pendiente',
      },
      {
        id: 5,
        name: 'Tarea 5',
        description: 'Descripcion de la tarea 5',
        status: 'Pendiente',
      },
    ],
  },
  {
    id: 2,
    name: 'Tienda 2',
    location: {
      latitude: 39.46995,
      longitude: -0.37739,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    tasks: [
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        status: 'Pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'Pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'Pendiente',
      },
    ],
  },
  {
    id: 3,
    name: 'Tienda 3',

    location: {
      latitude: 39.44985,
      longitude: -0.37639,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    tasks: [
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        status: 'Pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'Pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'Pendiente',
      },
    ],
  },
  {
    id: 4,
    name: 'Tienda 4',
    location: {
      latitude: 39.46965,
      longitude: -0.37939,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    tasks: [
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        status: 'Pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'Pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'Pendiente',
      },
    ],
  },
  {
    id: 5,
    name: 'Tienda 5',
    location: {
      latitude: 39.46955,
      longitude: -0.37839,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    tasks: [
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        status: 'Pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'Pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'Pendiente',
      },
    ],
  },
];
