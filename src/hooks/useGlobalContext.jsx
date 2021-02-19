import { useContext } from 'react';
import { AppContext } from '../components/context/GlobalContext';

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
