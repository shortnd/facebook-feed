import React from 'react';
import PropTypes from 'prop-types'

const FeedItem = ({ item }) => {
  const { from: { name }, message, permalink_url, full_picture, story } = item;
  return (
    <>
      <h2><a href={permalink_url}>{name}</a></h2>
      <p>
        {message ? (
          message
        ) : (
          story
        )}
      </p>
      <img src={full_picture} alt={name} />
      <p>
        {JSON.stringify(item)}
      </p>
    </>
  )
}

FeedItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedItem;
