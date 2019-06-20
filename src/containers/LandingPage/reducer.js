const initialState = {
  productsData: [],
  nextPage: "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
};

export default (state = initialState, action = {}) => {

  switch (action.type) {
  case 'PRODUCTS_DATA':
    state = Object.assign({}, state, {
      nextPage: action.payload.nextPage,
      productsData:  state.productsData.concat(action.payload.products)
    });
    break;
  default:
    break;
  }
  return state;
};
