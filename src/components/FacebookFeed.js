import React, { useState, useEffect } from 'react'
import FeedItem from './FeedItem';
import PropType from 'prop-types';
import styled from 'styled-components';

const FacebookFeed = ({ account, accessToken, fields, limit = 10 }) => {
  const [feed, setFeed] = useState([]);

  // TODO: https://developers.facebook.com/docs/graph-api/reference/post/

  // 109519387203849
  // EAAGhNEMI9lMBACiIFoRZBDKB07ZCdUWQkCvGHy8aOZCh8lKjsA9liYXOiB13T0rAaA3GvR5kZAFEgo2GtbwgXlQUra6hZClxaNtxXobDZBuEmLk9KMNZAgKnbwBY5fGdQhDSG64bgift7t9JZBe00HV0xNuBJkFDRZAXjUkNWyG4eJQZDZD
  // id,from,message,created_time,story,permalink_url,picture,full_picture
  // 4


  useEffect(() => {
    async function socialFeed() {
      const xhr = new XMLHttpRequest();
      try {
        // const response = request.open("https://graph.facebook.com/v6.0/" + account + "/posts?fields=" + fields + "&limit=" + limit + "&access_token=" + accessToken);

        // const response = await fetch();
        xhr.open("GET", "https://graph.facebook.com/v6.0/" + account + "/posts?fields=" + fields + "&limit=" + limit + "&access_token=" + accessToken, false);
        xhr.send();
        const json = JSON.parse(xhr.responseText)
        setFeed(json.data)
        // setFeed()
      } catch (e) {
        console.log(e)
      }
    }
    socialFeed()
  }, [account, fields, limit, accessToken]);

  return (
    <>
      <h1>Facebook Feed</h1>
      <GridContainer>
        {feed.map(item => <FeedItem key={item.id} item={item} />)}
      </GridContainer>
    </>
  )
};

FacebookFeed.propTypes = {
  account: PropType.string.isRequired,
  accessToken: PropType.string.isRequired,
  fields: PropType.string.isRequired,
  limit: PropType.number
}

const GridContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

export default FacebookFeed
