import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    List: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LIST:
            return ({
                ...state,
                List: action.payload
            })
        default:
            return state;
    }

}