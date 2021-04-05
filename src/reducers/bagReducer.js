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
      return { ...state, data: state.data.filter((item) => item.id !== payload) };
    case 'GET_TOTALS':
      console.log('getting totals...');
      const { amount, total } = state.data
        ? state.data.reduce(
            (acc, item) => {
              const result = { ...acc };
              result.amount += +item.amount;
              result.total += +item.price * item.amount;
              return result;
            },
            { amount: 0, total: 0 }
          )
        : { amount: 0, total: 0 };
      console.log('got totals');
      return { ...state, amount, total: parseFloat(total.toFixed(2)) };
    case 'TOGGLE_QUANTITY':
      let newData = [...state.data];

      if (payload.action === 'INCREASE') {
        newData = newData.map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: item.amount + 1 };
          }

          return item;
        });
      }

      if (payload.action === 'DECREASE') {
        newData = newData
          .map((item) => {
            if (item.id === payload.id) {
              return { ...item, amount: item.amount - 1 };
            }

            return item;
          })
          .filter((item) => item.amount > 0);
      }

      return { ...state, data: newData };
    default:
      return state;
  }
};

export default bagReducer;
