import { useContext } from 'react';
import { AppContext } from '../contexts/GlobalContext';

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
