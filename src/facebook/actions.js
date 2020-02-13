export const GET_FEED = 'GET_FEED';

export function getFeed(account, fields, limit, accessToken) {
  return async function (dispatch) {
    const res = await fetch("https://graph.facebook.com/v6.0/" + account + "/posts?fields=" + fields + "&limit=" + limit + "&access_token=" + accessToken)
    const json = await res.json();
    console.log(json)
    return dispatch({
      type: 'GET_FEED',
      data: json.data
    })
  }
}
