import update from 'immutability-helper';
import {Difficulty} from '../consts/difficultyList';

const initialState = {
    inputNameValue: localStorage.getItem("name") || '',
    inputDifficultyValue: Difficulty.EASY,
    isShowModal: false,
};

function settingsReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $set: initialState
            });
        case 'FETCH_PLAYER_NAME':
            return update(state, {
                $merge: {
                    inputNameValue: localStorage.getItem("name") || '',
                }
            });
        case 'ON_INPUT_NAME_CHANGED':
            return update(state, {
                $merge: {
                    inputNameValue: action.payload,
                }
            });
        case 'ON_DIFFICULTY_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    inputDifficultyValue: action.payload,
                }
            });
        case 'SHOW_MODAL':
            return update(state, {
                $merge: {
                    isShowModal: action.payload,
                }
            });
        default:
            return state;
    }
}

export default settingsReducer;