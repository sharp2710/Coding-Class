import React from 'react'
import Content from './components/content'
import { Provider } from 'react-redux';

import { store } from './components/reducers';




const App = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App