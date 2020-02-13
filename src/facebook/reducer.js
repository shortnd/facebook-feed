import { GET_FEED } from './actions';

const initialState = {
  posts: [],
  postsLoaded: false,
  postsLoadedAt: null,
}

export default function (state = initialState, action) {
  const { type, data } = action;
  switch(type) {
    case GET_FEED:
      return {
        ...state,
        posts: data,
        postsLoaded: true,
        postsLoadedAt: new Date()
      }
    default:
      return state
  }
}
