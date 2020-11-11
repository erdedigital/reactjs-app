import names from "./names";

export const setUserLogin = (payload) => ({
    type: names.SET_USER_LOGIN,
    payload
})

export const setIsLoading = (payload) => ({
    type: names.SET_LOADING,
    payload
})