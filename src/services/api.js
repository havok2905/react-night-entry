import 'whatwg-fetch';

const API_BASE = 'http://quiet-thicket-99975.herokuapp.com';

export default (()=> {

  let places = (tags) => {
    const url = `${API_BASE}/places/by_tag_names/${tags}`;
    return handleRequest(url);
  }

  let allPlaces = () => {
    const url = `${API_BASE}/places`;
    return handleRequest(url);
  }

  let tags = ()=> {
    const url = `${API_BASE}/tags`;
    return handleRequest(url);
  }

  let handleRequest = (url)=> {
    return fetch(url)
      .then(function(response) {
        return response.json()
      })
      .then(function(body) {
        return body;
      });
  }

  return { tags, places, allPlaces }

})();
