import {store} from '../../redux/store'

export const setHeaders = (contentType, token, jwtToken) => {
    const userData = store.getState().auth?.userData
  let headers = {
    "Content-Type": contentType,
    "X-Timezone-Offset": new Date().getTimezoneOffset(),
    "Timezone-Central": Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  if (token) headers.Authorization = `Bearer ${userData.jwtToken}`
  if (jwtToken) headers.Authorization = `Bearer ${jwtToken}`
  return headers
};
