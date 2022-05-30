import React from "react";
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { AppRouter } from './router';

const Test = () => { return(<></>)}
export default function App() {
  return (
    <Provider store={configureStore({})}>
       <AppRouter/>
    
    </Provider >
  );
}
