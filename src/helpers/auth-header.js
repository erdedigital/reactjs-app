import { actionsServices } from '../services';

export function authHeader () {
  // return authorization header with jwt token
  let currentUser = actionsServices.currentUserValue;
  if (currentUser && currentUser.Authorization && currentUser.secret) {
    return currentUser;
  } else {
    return {};
  }
}
