import { useContext } from 'react';
import { AppContext } from '../components/GlobalContext';

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
