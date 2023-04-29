import {apiClient} from '@api';

export const getStores = async () => {
  //const url = 'stores';

  const url = 'f6b8e9cd-3c19-499a-9227-8d64ae57b1ce';
  try {
    const response = await apiClient.get(url);
    console.log('asdasdasda',response.data);
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
