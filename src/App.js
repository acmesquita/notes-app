import React from 'react';
import { Provider } from 'react-redux';

import './styles/global.css';

import store from './store';
import Main from './pages/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
