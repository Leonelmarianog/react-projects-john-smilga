const bagReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, data: null, loading: true, error: { status: false, message: null } };
    case 'SUCCESS':
      return { ...state, data: payload, loading: false, error: { status: false, message: null } };
    case 'ERROR':
      return { ...state, data: null, loading: false, error: { status: true, message: payload } };
    case 'CLEAR_BAG':
      return { ...state, data: [] };
    case 'REMOVE_ITEM':
      const newData = state.data.filter((item) => item.id !== payload);
      return { ...state, data: newData };
    default:
      return state;
  }
};

export default bagReducer;
