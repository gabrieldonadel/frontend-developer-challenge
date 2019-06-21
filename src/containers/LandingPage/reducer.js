const initialState = {
  productsData: [],
  nextPage: "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
  formSuccess: null
};

//Save Global State 
export default (state = initialState, action = {}) => {

  switch (action.type) {
  case 'PRODUCTS_DATA':
    state = Object.assign({}, state, {
      nextPage: action.payload.nextPage,
      productsData:  state.productsData.concat(action.payload.products)
    });
    break;
  case 'FORM_RESPONSE':
    state = Object.assign({}, state, {
      formSuccess:  action.payload
    });
    break;
  default:
    break;
  }
  return state;
};
