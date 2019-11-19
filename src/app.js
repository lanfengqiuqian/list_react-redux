import React from 'react';
import List from './list/pages/container'
import { Provider } from 'react-redux'
import store from './list/store/index'

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
