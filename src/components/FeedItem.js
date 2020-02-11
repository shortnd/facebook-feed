import React from 'react';
import PropTypes from 'prop-types'

const FeedItem = ({ item }) => {
  const { from: { name }, message, permalink_url, full_picture, story, picture, actions} = item;
  return (
    <div className="shadow rounded border w-1/2 overflow-hidden p-3">
      <h2>
        <a href={permalink_url}>
          <img src={picture} alt={`${name} logo`} />
          {name}
        </a>
      </h2>
      <section className="mb-3 px-3">
        {message}
      </section>
      <article className="flex justify-around border-t pt-3">
        {actions.map(({link, name}) => (
          <a href={link} key={name} className="block border-r flex-1 text-center">
            {name === "Like" ? (
              <>
                <i className="fa fa-thumbs-up"></i>
                <span>Like</span>
              </>
            ) : null}
            {name === "Comment" ? (
              <><i className="fa fa-comment-alt"></i><span>Comment</span></>
            ) : null}
            {name === "Share" ? (<><i className="fa fa-share"></i><span>Share</span></>) : null}
          </a>
        ))}
      </article>
    </div>
  )
}

FeedItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedItem;
