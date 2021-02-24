const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, data: null, loading: true, error: { status: false, message: null } };
    case 'SUCCESS':
      return { ...state, data: payload, loading: false, error: { status: false, message: null } };
    case 'ERROR':
      return { ...state, data: null, loading: false, error: { status: true, message: payload } };
    case 'CLEAR_CART':
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default cartReducer;
