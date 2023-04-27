import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {resetStores, getStores} from '@services/stores';
import {useNavigation} from '@react-navigation/native';
import {Card} from '@components';

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
      contentContainerStyle={{paddingBottom: 80,paddingHorizontal:30}}>
      {stores.map(store => (
        <Card
          key={store.id}
          onPress={() => {
            goToStore(store);
          }}>
          <Text style={styles.titleTienda}>{store.name}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },

  titleTienda: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const stores = [
  {
    id: 1,
    name: 'Tienda 1',
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
