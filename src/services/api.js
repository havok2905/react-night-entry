import 'whatwg-fetch';
import SpinnyStore from '../stores/spinny-store';

const API_BASE = 'http://quiet-thicket-99975.herokuapp.com';

export default (()=> {

  let places = (tags) => {
    const url = `${API_BASE}/places/by_tag_names/${tags}`;
    SpinnyStore.toggleSpinningOn();
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

  return { tags, places }

})();
