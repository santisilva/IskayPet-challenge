import {apiClient} from '@api';

export const getStores = async () => {
  //const url = 'stores';
  const url = '/65709c03-dfb1-4b59-864f-adacdf8594d3';
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const resetStores = async () => {
  const url = 'stores/reset';
  try {
    const response = await apiClient.post(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkInTask = async (taskId, storeId) => {
  const url = '/checkin';
    const body = {
      taskId,
      storeId,
    };
    const response = await apiClient.post(url, body);
    return response.data;

};
