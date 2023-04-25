import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {resetStores, getStores} from '@services/stores';

const Home = () => {
  useEffect(() => {
    /*
    resetStores();
    getStores().then((response) => {
      console.log(response.data);
    }
    );
    */
  }, []);

  return (
    <View style={styles.container}>
      {stores.map(store => (
        <View style={styles.containerTienda} key={store.id}>
          <Text style={styles.titleTienda}>{store.name}</Text>
          <ScrollView horizontal={true}>
            {store.tasks.map(task => (
              <View key={task.id}>
                <Text>{task.name}</Text>
                <Text>{task.description}</Text>
                <Text>{task.status}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  containerTienda: {
    marginBottom: 30,
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
        status: 'pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'pendiente',
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
        status: 'pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'pendiente',
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
        status: 'pendiente',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 'pendiente',
      },
      {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 'pendiente',
      },
    ],
  },
];
