import React from 'react';
import FacebookFeed from './components/FacebookFeed';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <FacebookFeed
      account="RichlandCountyOhio"
      accessToken="EAAGhNEMI9lMBACiIFoRZBDKB07ZCdUWQkCvGHy8aOZCh8lKjsA9liYXOiB13T0rAaA3GvR5kZAFEgo2GtbwgXlQUra6hZClxaNtxXobDZBuEmLk9KMNZAgKnbwBY5fGdQhDSG64bgift7t9JZBe00HV0xNuBJkFDRZAXjUkNWyG4eJQZDZD"
      fields="id,actions,call_to_action,created_at,from,message,created_time,story,permalink_url,picture,full_picture,place,shares,via,likes"
      limit={1}
       />
  );
}

export default App;
