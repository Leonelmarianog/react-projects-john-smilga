export const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, loading: true, error: null, data: null };
    case 'SUCCESS':
      return { ...state, loading: false, data: payload };
    case 'ERROR':
      return { ...state, loading: false, error: payload };
    case 'CLEAN': {
      return { ...state, loading: false, error: null, data: null };
    }
    default:
      return state;
  }
};
