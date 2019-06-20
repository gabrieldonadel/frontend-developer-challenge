import { request } from '../../core/constants'; 



export const getProductsData = (query) => (dispatch, store) => {
  request.get(`${query}`)
    .then((response) => {
      dispatch({
        type: 'PRODUCTS_DATA',
        errorRequest: false,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log('PRODUCTS_DATA', error);
      dispatch({
        type: 'PRODUCTS_DATA',
        errorRequest: true,
        payload: []
      });
    });
};


