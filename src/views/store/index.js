import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Card} from '@components';
import Colors from '@colors';
import {Button} from '../../components';
import {checkInTask} from '../../services/stores';


const Store = () => {
  const [filteredStores, setFilteredStores] = useState([]);
  const [filterSelected, setFilterSelected] = useState('all');
  const [styleFilterSelected, setStyleFilterSelected] = useState([
    styles.filterSelector,
    styles.borderAll,
  ]);
  const [styleStatusSelected, setStyleStatusSelected] = useState([
    styles.filterSelector,
    styles.borderAll,
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [taskLoading, setTaskLoading] = useState(0);

  const {params} = useRoute();

  useEffect(() => {
    switch (filterSelected) {
      case 'all':
        setFilteredStores(params?.store.tasks);
        setStyleFilterSelected([styles.filterSelector, styles.borderAll]);
        setStyleStatusSelected(styles.allBackground);
        break;
      case 'pending':
        const pending = params?.store.tasks.filter(
          task => task.status === 'Pendiente',
        );
        setFilteredStores(pending);
        setStyleFilterSelected([styles.filterSelector, styles.borderPending]);
        setStyleStatusSelected(styles.pendingBackground);
        break;
      case 'inProgress':
        const inProgress = params?.store.tasks.filter(
          task => task.status === 'En proceso',
        );
        setFilteredStores(inProgress);
        setStyleFilterSelected([styles.filterSelector, styles.borderProgress]);
        setStyleStatusSelected(styles.inProgresBackground);
        break;
      case 'done':
        const done = params?.store.tasks.filter(
          task => task.status === 'Terminada',
        );
        setFilteredStores(done);
        setStyleFilterSelected([styles.filterSelector, styles.borderDone]);
        setStyleStatusSelected(styles.doneBackground);
        break;
      default:
        setFilteredStores(params?.store.tasks);
        setStyleFilterSelected([styles.filterSelector, styles.borderAll]);
        setStyleStatusSelected(styles.allBackground);
        break;
    }
  }, [filterSelected]);

  const taskContainerStatus = status => {
    switch (status) {
      case 'Pendiente':
        return styles.pendingBackground;
      case 'En proceso':
        return styles.inProgresBackground;
      case 'Terminada':
        return styles.doneBackground;
      default:
        return styles.task;
    }
  };

  const taskstatus = status => {
    switch (status) {
      case 'Pendiente':
        return styles.borderPending;
      case 'En proceso':
        return styles.borderProgress;
      case 'Terminada':
        return styles.borderDone;
      default:
        return styles.task;
    }
  };

  const handleCheckIn = async taskId => {
    setTaskLoading(taskId);
    console.log('Check in');
    setIsLoading(true);
    try {
      const responseCheckIn = await checkInTask(taskId);
      console.log(responseCheckIn);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerScroll}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <Text style={styles.titleStore}>¡Bienvenido a {params?.store.name}!</Text>
      
      <Text style={styles.titleListTasks}>Tareas</Text>
      <View style={styleFilterSelected}>
        <TouchableOpacity
          style={[
            styles.buttonFilter,
            filterSelected === 'all' && styleStatusSelected,
            {
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            },
          ]}
          onPress={() => setFilterSelected('all')}>
          <Text style={styles.textFilterSelector}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonFilter,
            filterSelected === 'pending' && styleStatusSelected,
          ]}
          onPress={() => setFilterSelected('pending')}>
          <Text style={styles.textFilterSelector}>Pendientes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonFilter,
            filterSelected === 'inProgress' && styleStatusSelected,
          ]}
          onPress={() => setFilterSelected('inProgress')}>
          <Text style={styles.textFilterSelector}>En proceso</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonFilter,
            {borderTopRightRadius: 8, borderBottomRightRadius: 8},
            filterSelected === 'done' && styleStatusSelected,
          ]}
          onPress={() => setFilterSelected('done')}>
          <Text style={styles.textFilterSelector}>Terminadas</Text>
        </TouchableOpacity>
      </View>
      {filteredStores.map(task => (
        <Card style={[styles.task, taskstatus(task.status)]}>
          <View
            style={[styles.containerTask, taskContainerStatus(task.status)]}>
            <Text>{task.status}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.titleTask} key={task.id}>
              {task.name}
            </Text>
            <Text>{task.description}</Text>
          </View>
          <Button
            text="CheckIn"
            onPress={() => handleCheckIn(task.id)}
            style={styles.buttonCheckIn}
            loading={isLoading && task.id === taskLoading}
          />
        </Card>
      ))}
    </ScrollView>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 50,
  },
  containerScroll: {
    alignItems: 'center',
    paddingBottom: 80,
    paddingHorizontal: 40,
  },
  titleStore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleListTasks: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  filterSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginBottom: 10,
    borderRadius: 8,
  },
  textFilterSelector: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
  },

  buttonFilter: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: Colors.gray,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  containerTask: {
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  allBackground: {
    backgroundColor: Colors.brown,
  },
  pendingBackground: {
    backgroundColor: '#ffff005a',
  },
  inProgresBackground: {
    backgroundColor: '#0000ff5a',
  },
  doneBackground: {
    backgroundColor: '#0080005a',
  },
  task: {
    borderWidth: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
    height: 'auto',
    minHeight: 200,
    justifyContent: 'space-between',
  },
  borderPending: {
    borderColor: 'yellow',
  },
  borderProgress: {
    borderColor: 'blue',
  },
  borderDone: {
    borderColor: 'green',
  },
  body: {
    alignSelf: 'stretch',
    padding: 10,
  },

  titleTask: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  buttonCheckIn: {
    alignSelf: 'center',
    marginTop: 15,
  },
});
