import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import FeedItem from './FeedItem';
import PropType from 'prop-types';
import { getFeed } from '../actions';
import styled from 'styled-components';

const FacebookFeed = ({ feed, isLoaded, loadedAt, getFeed, account, accessToken, fields, limit, children }) => {

  // TODO: https://developers.facebook.com/docs/graph-api/reference/post/

  // 109519387203849
  // EAAGhNEMI9lMBACiIFoRZBDKB07ZCdUWQkCvGHy8aOZCh8lKjsA9liYXOiB13T0rAaA3GvR5kZAFEgo2GtbwgXlQUra6hZClxaNtxXobDZBuEmLk9KMNZAgKnbwBY5fGdQhDSG64bgift7t9JZBe00HV0xNuBJkFDRZAXjUkNWyG4eJQZDZD
  // id,from,message,created_time,story,permalink_url,picture,full_picture
  // 4


  useEffect(() => {
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || ((new Date() - new Date(loadedAt)) > oneHour)) {
      getFeed(account, fields, limit, accessToken);
    }
  }, [accessToken, account, fields, getFeed, isLoaded, limit, loadedAt]);
  return (
    <>
      <h1>Facebook Feed</h1>
      <GridContainer>
        {feed.map(item => <FeedItem key={item.id} item={item} />)}
      </GridContainer>
    </>
  )
};

const mapStateToProps = state => ({
  feed: state.feeds.posts,
  isLoaded: state.feeds.postsLoaded,
  loadedAt: state.feeds.postsLoadedAt
});

const mapDispatchToState = dispatch => bindActionCreators({
  getFeed
}, dispatch)

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

export default connect(mapStateToProps, mapDispatchToState)(FacebookFeed)
