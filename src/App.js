import React from 'react';
import FacebookFeed from './facebook/components/FacebookFeed';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import rootReducer from './rootReducer';

const middleware = [
  logger,
  thunk,
];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

function App() {
  return (
    <Provider store={store}>
      <FacebookFeed
        account="RichlandCountyOhio"
        accessToken="EAAGhNEMI9lMBACiIFoRZBDKB07ZCdUWQkCvGHy8aOZCh8lKjsA9liYXOiB13T0rAaA3GvR5kZAFEgo2GtbwgXlQUra6hZClxaNtxXobDZBuEmLk9KMNZAgKnbwBY5fGdQhDSG64bgift7t9JZBe00HV0xNuBJkFDRZAXjUkNWyG4eJQZDZD"
        fields="id,actions,call_to_action,created_at,from,message,created_time,story,permalink_url,picture,full_picture,place,shares,via,likes"
        limit={10}>
        </FacebookFeed>
    </Provider>
  );
}

export default App;
