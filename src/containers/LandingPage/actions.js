import { request } from '../../core/constants'; 


//Make a GET request reciving the next page prop as param
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

//Send the form data and register on the Linx NewsLetter
export const subscribeNewsLetter= (body) => (dispatch, store) => {
  return request.post(`www.rdstation.com.br/api/1.3/conversions`,body)
    .then((response) => {
      dispatch({
        type: 'FORM_RESPONSE',
        errorRequest: false,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log('FORM_RESPONSE', error);
      dispatch({
        type: 'FORM_RESPONSE',
        errorRequest: true,
        payload: []
      });
    });
};


