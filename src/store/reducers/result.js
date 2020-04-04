import * as actionTypes from "../action";

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    //Swich-case can be used.
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({
                id: new Date(),
                value: state.counter
            })
        };
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        const newResults = state.results.filter(
            (result, index) => result.id !== action.resultId
        );
        return { ...state, results: newResults };
    }
    return state;
};

export default reducer;
