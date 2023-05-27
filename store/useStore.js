import { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreContext = createContext();

export default function StoreContextLayout({ children }) {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);

  console.log(AsyncStorage);

  AsyncStorage.getItem('name').then((value) => {
    if (value) {
      setName(value);
    }
  });

  AsyncStorage.getItem('age').then((value) => {
    if (value) {
      setAge(value);
    }
  });

  return (
    <StoreContext.Provider value={{ name, setName, age, setAge }}>
      {children}
    </StoreContext.Provider>
  );
}
