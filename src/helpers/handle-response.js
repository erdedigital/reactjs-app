import { actionsServices } from '../services';


const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).userLogin);

export function handleResponse (response) {
  const data = response.data;
  if (response.status >= 400) {
    if ([401, 403].indexOf(response.status) !== -1) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      actionsServices.logout();
      window.location.href = '/login';
      window.location.reload(true);
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  } else if (response.data.status !== 'ok') {
    const error = data.message ? data : response.statusText;
    return Promise.reject(error);
  }
  return data;
}

export function handleError (error) {
  if (error.code === 'ECONNABORTED') {
    error.message = 'Network Timeout';
  }

  if (error.response && error.response.data.status !== 'ok') {
    return Promise.reject(error);
  }
  return Promise.reject(error);
}


export const getUserLogin = user;

let authorization = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Accept, Authorization, secret',
    'Access-Control-Allow-Credentials': true
  }
}

if(user){
  authorization.headers.secret = user.secret;
  authorization.headers.Authorization = `Bearer ${user.token}`
}


export const requestOptions = authorization;