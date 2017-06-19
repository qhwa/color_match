import React           from 'react';
import { render }      from 'react-dom';
import App             from 'pages/home';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import reducer         from './reducers';
import domready        from 'domready';

import '@hlj/share';

const store = createStore(reducer);

require('styles/app.scss');

domready(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
