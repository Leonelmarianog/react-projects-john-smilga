import { useContext } from 'react';
import { AppContext } from '../contexts/GlobalContext';

export const useGlobalContext = () => useContext(AppContext);
