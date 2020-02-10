import React, { useState, useEffect } from 'react'
import FeedItem from './FeedItem';
import PropType from 'prop-types';

const FacebookFeed = ({ account, accessToken, fields, limit = 10 }) => {
  const [feed, setFeed] = useState([]);

  // TODO: https://developers.facebook.com/docs/graph-api/reference/post/

  // 109519387203849
  // EAAGhNEMI9lMBACiIFoRZBDKB07ZCdUWQkCvGHy8aOZCh8lKjsA9liYXOiB13T0rAaA3GvR5kZAFEgo2GtbwgXlQUra6hZClxaNtxXobDZBuEmLk9KMNZAgKnbwBY5fGdQhDSG64bgift7t9JZBe00HV0xNuBJkFDRZAXjUkNWyG4eJQZDZD
  // id,from,message,created_time,story,permalink_url,picture,full_picture
  // 4


  useEffect(() => {
    let http = new XMLHttpRequest();
    http.open("GET", "https://graph.facebook.com/v5.0/"+ account + "/posts?fields=" + fields + "&limit=" + limit + "&access_token=" + accessToken, false);
    http.send();
    let json = JSON.parse(http.responseText)
    setFeed(json.data)
  }, [account, fields, limit, accessToken]);

  return (
    <>
      <h1>Facebook Feed</h1>
      {feed.map(item => <FeedItem key={item.id} item={item} />)}
    </>
  )
};

FacebookFeed.propTypes = {
  account: PropType.string.isRequired,
  accessToken: PropType.string.isRequired,
  fields: PropType.string.isRequired,
  limit: PropType.number
}

export default FacebookFeed
