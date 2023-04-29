/**
 * @format
 */

import 'react-native';
import React from 'react';
import {apiClient} from '../src/api';

//El control de los endpoints es importante sobre todo si no trabajamos con una api propia como es mi caso para este challenge. 
//Esto es porque no sabemos en que momento la api puede cambiar y por ende los endpoints. 
//Por eso es importante tener un control de los endpoints para saber si se han cambiado o no y asi poder cambiarlos en nuestra app.
describe('apiClient, should return a list of stores with', () => {
  let response;

  beforeAll(async () => {
    response = await apiClient.get('/f6b8e9cd-3c19-499a-9227-8d64ae57b1ce');
  });

  it('status 200', () => {
    expect(response.status).toEqual(200);
  });
  it('data as an array', () => {
    expect(Array.isArray(response.data)).toBe(true);
  });
  it('id as a number', () => {
    response.data.forEach(store => {
      expect(typeof store.id).toBe('number');
    });
  });
  it('name as a string', () => {
    response.data.forEach(store => {
      expect(typeof store.name).toBe('string');
    });
  });
  it('tasks as an array', () => {
    response.data.forEach(store => {
      expect(Array.isArray(store.tasks)).toBe(true);
    });
  });
  it('location as an object', () => {
    response.data.forEach(store => {
      expect(typeof store.location).toBe('object');
    });
  });
  it('location has latitude and longitude as numbers', () => {
    response.data.forEach(store => {
      expect(typeof store.location.latitude).toBe('number');
      expect(typeof store.location.longitude).toBe('number');
    });
  });
  it('location has latitudeDelta and longitudeDelta as numbers', () => {
    response.data.forEach(store => {
      expect(typeof store.location.latitudeDelta).toBe('number');
      expect(typeof store.location.longitudeDelta).toBe('number');
    });
  });
  it('tasks has id as a number', () => {
    response.data.forEach(store => {
      store.tasks.forEach(task => {
        expect(typeof task.id).toBe('number');
      });
    });
  });
  it('tasks has name as a string', () => {
    response.data.forEach(store => {
      store.tasks.forEach(task => {
        expect(typeof task.name).toBe('string');
      });
    });
  });
  it('tasks has description as a string', () => {
    response.data.forEach(store => {
      store.tasks.forEach(task => {
        expect(typeof task.description).toBe('string');
      });
    });
  });
  it('tasks has status as a string', () => {
    response.data.forEach(store => {
      store.tasks.forEach(task => {
        expect(typeof task.status).toBe('string');
      });
    });
  });
});
