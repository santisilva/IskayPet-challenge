import {useContext, useEffect} from 'react';
import {apiClient} from '@api';
import ModalHandler from '@context/ModalHandler';

export default function APIInterceptor({children}) {
  const {showError} = useContext(ModalHandler);

  useEffect(() => {
    const interceptor = apiClient.interceptors.response.use(
      response => response,
      async error => {
        let messageError = null;
        if (error.response.data){
          messageError = error.response.data;
        }
        if (Array.isArray(error.response?.data)) {
          messageError = error.response.data[0].details;
        }
        if (error.response.data?.message) {
          messageError = error.response.data.message;
        }
        if (Array.isArray(error.response.data?.details)) {
          messageError = error.response.data.details[0].message;
        }
        showError(null, messageError);

        return Promise.reject(error);
      },
    );

    return () => {
      if (interceptor) {
        apiClient.interceptors.request.eject(interceptor);
      }
    };
  }, [apiClient]);

  return children;
}
