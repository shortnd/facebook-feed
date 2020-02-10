import React, { useState, useEffect } from 'react'
import FeedItem from './FeedItem';

const FacebookFeed = ({ account, accessToken, fields, limit }) => {
  const [feed, setFeed] = useState([]);

  // TODO: https://developers.facebook.com/docs/graph-api/reference/post/

  // 109519387203849
  // EAAGhNEMI9lMBACiIFoRZBDKB07ZCdUWQkCvGHy8aOZCh8lKjsA9liYXOiB13T0rAaA3GvR5kZAFEgo2GtbwgXlQUra6hZClxaNtxXobDZBuEmLk9KMNZAgKnbwBY5fGdQhDSG64bgift7t9JZBe00HV0xNuBJkFDRZAXjUkNWyG4eJQZDZD
  // id,from,message,created_time,story,permalink_url,picture,full_picture
  // 4


  useEffect(() => {
    fetch(`https://graph.facebook.com/v5.0/${account}/posts?fields=${fields}&limit=${limit}&access_token=${accessToken}`).then(res => res.json()).then(res => setFeed(res.data));
  }, [account, fields, limit, accessToken]);

  return (
    <>
      <h1>Facebook Feed</h1>
      {feed.map(item => <li key={item.id}>{item.message ? item.message : item.story}</li>)}
    </>
  )
};

export default FacebookFeed
