import * as actionTypes from "../action";

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        const newState = { ...state };
        newState.counter = state.counter + action.value;
        return newState;
    } //Swich-case can be used.
    return state;
};

export default reducer;
