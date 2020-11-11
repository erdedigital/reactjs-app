import axios from 'axios';

import {
  handleResponse,
  handleError,
  requestOptions
} from '../helpers';

export const actionsServices = {
  POST,
  GET,
  PACTH,
  logout
};

console.log('handleResponse', handleResponse)


async function POST(params) {
  // console.log('requestOptions', requestOptions)
  return await axios.post( process.env.REACT_APP_API_URL + params.url, params.payload ? params.payload : {}, requestOptions)
    .then(handleResponse)
    .catch(handleError)
    .then(result => {
      return result.data;
    })
}

async function GET(params) {
  return await axios.get( process.env.REACT_APP_API_URL + params.url, requestOptions)
    .then(handleResponse)
    .catch(handleError)
    .then(result => {
      return result.data;
    })
}

async function PACTH(params) {
  return await axios.patch( process.env.REACT_APP_API_URL + params.url, params.payload ? params.payload : {}, requestOptions)
    .then(handleResponse)
    .catch(handleError)
    .then(result => {
      return result.data;
    })
}


async function logout(params) {
  console.log('logout')
}





// async function forgotPassword(email, url) {
//   return await axios.post(`${process.env.REACT_APP_API_URL}/gtw/forgotPassword`, { email, url }, requestOptions)
//     .then(handleResponse)
//     .catch(handleError);
// }

// async function changePassword(token, new_password, conf_password) {
//   return await axios.patch(`${process.env.REACT_APP_API_URL}/gtw/changePassword/${token}`, { new_password, conf_password }, requestOptions)
//     .then(handleResponse)
//     .catch(handleError);
// }

