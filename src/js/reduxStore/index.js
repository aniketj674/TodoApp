import actionsType from './actions/actionsType';
import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionsType.SET_TASKS:
        return { ...state, tasks: action.value };
    default:
        return state;
    }
};

export default rootReducer;
