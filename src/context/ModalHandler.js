import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from '@components';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Image,
} from 'react-native';
import Colors from '@colors';
import {PerroTriste} from '@assets/logos';
const ModalHandler = React.createContext({});

export function ModalHandlerProvider({children}) {
  const [message, setMessage] = useState(false);
  const [title, setTitle] = useState('Error');
  const [modalVisible, setModalVisible] = useState(false);

  const showError = (titleError, error) => {
    let defaultMessage = 'Se ha producido un error inesperado.';
    if (error) setMessage(error);
    else setMessage(defaultMessage);
    if (titleError) setTitle(titleError);
    setModalVisible(true);
  };

  return (
    <ModalHandler.Provider value={{showError}}>
      {children}
      {modalVisible && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.container}>
            <View style={styles.containerCard}>
              <View style={styles.containerTitle}>
                <Text style={styles.titleError}>{title ? title : 'Error'}</Text>
              </View>
              <Image source={PerroTriste} style={{width: 100, height: 100}} />
              <Text style={styles.textError}>{message}</Text>
              <Button
                text={'Cerrar'}
                onPress={() => {
                  setMessage(false);
                  setModalVisible(false);
                }}
                style={styles.button}
              />
            </View>
          </View>
        </Modal>
      )}
    </ModalHandler.Provider>
  );
}

ModalHandlerProvider.propTypes = {
  children: PropTypes.node,
};

export default ModalHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(50,50, 50, 0.5)',
  },
  containerCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    width: '90%',
    maxHeight: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleError: {
    fontSize: 18,
    color: Colors.darkBrown,
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  textError: {
    fontSize: 14,
    color: Colors.darkBrown,
    marginTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 40,
  },
  containerTitle: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
  },
});
