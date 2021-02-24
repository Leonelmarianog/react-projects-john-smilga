const bagReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      console.log('loading...');
      return { ...state, loading: true, error: { status: false, message: null }, data: null };
    case 'SUCCESS':
      console.log('success!');
      return { ...state, loading: false, error: { status: false, message: null }, data: payload };
    case 'ERROR':
      return { ...state, loading: false, error: { status: true, message: payload }, data: null };
    case 'CLEAR_BAG':
      return { ...state, data: [], amount: 0, total: 0 };
    case 'REMOVE_ITEM':
      const newData = state.data.filter((item) => item.id !== payload);
      return { ...state, data: newData };
    case 'GET_TOTALS':
      console.log('getting totals...');
      const { amount, total } = state.data
        ? state.data.reduce(
            (acc, item) => {
              const result = { ...acc };
              result.amount += +item.amount;
              result.total += +item.price;
              return result;
            },
            { amount: 0, total: 0 }
          )
        : { amount: 0, total: 0 };
      console.log('got totals');
      return { ...state, amount, total: parseFloat(total.toFixed(2)) };
    default:
      return state;
  }
};

export default bagReducer;
