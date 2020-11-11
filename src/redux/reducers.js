import names from "./names";

const reducer = (state = {}, { type, payload }) => {
    switch (type) {
       case names.SET_USER_LOGIN:
        return { ...state, userLogin: payload, isLoading: false };
        case names.SET_LOADING:
        return { ...state, isLoading: payload };
       default:
         return state;
     }
};

export default reducer;