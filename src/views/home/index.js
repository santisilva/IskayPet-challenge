import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {resetStores, getStores} from '@services/stores';
import {useNavigation} from '@react-navigation/native';
import {Card} from '@components';
import {LogoPng, MapaIcon} from '../../assets/logos';
import Colors from '@colors';
import {Button} from '../../components';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    
    resetStores();
    getStores().then(response => {
      console.log(response.data);
    });
    
  }, []);

  const goToStore = store => {
    navigation.navigate('Store', {store});
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerScroll}>
      <Image source={LogoPng} style={styles.logo} />
      <Button
        onPress={() =>
          navigation.navigate('Map', {
            location: stores.map(element => element.location),
          })
        }
        text="Ver todas las tiendas"
        style={styles.buttonSeeAllStores}
      />
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
              <ImageBackground source={MapaIcon} style={styles.imageMap}>
                <Text style={styles.buttonSeeMap}>Ver en mapa</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <Button
            onPress={() => goToStore(store)}
            text="Ver tienda"
            style={styles.buttonSeeStore}
          />
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
  containerScroll: {
    paddingBottom: 80,
    paddingHorizontal: 30,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageMap: {
    width: 170,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonSeeStore: {
    marginTop: 25,
  },
  buttonSeeMap: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 18,
  },
  buttonSeeAllStores: {
    alignSelf: 'center',
  },
});

const stores = [
  {
    id: 1,
    name: 'IskayPet Valencia',
    location: {
      latitude: 39.46975,
      longitude: -0.37739,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    tasks: [
      {
        id: 1,
        name: 'Construcción de objetivos',
        description:
          'Para la construccion de este objetivo se debe de tener en cuenta los siguientes puntos',
        status: 'Pendiente',
      },
      {
        id: 2,
        name: 'Pago de impuestos',
        description:
          'Para el pago de impuestos se debe de tener en cuenta los activos y ver los impuestos que se deben de pagar',
        status: 'En proceso',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description:
          'sam lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',

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
    name: 'Kiwoko Valencia',
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
        //descripcion de 500 caracteres
        description:
          'sam lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
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
