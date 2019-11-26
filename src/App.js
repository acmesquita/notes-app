import React from 'react';
import { Provider } from 'react-redux';

import './styles/global.css'

import store from './store'
import ComponentList from './components/ComponentList';

function App() {
  return (
    <Provider store={store}>
      <ComponentList />
    </Provider>
  );
}

export default App;
