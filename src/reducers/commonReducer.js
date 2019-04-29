import update from 'immutability-helper';
import viewsConsts from '../consts/views';


const initialState = {
    view: viewsConsts.SETTINGS,
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'CHANGE_VIEW':
            return update(state, {
                $merge: {
                    view: action.payload,
                }
            });
        default:
            return state;
    }
}

export default commonReducer;