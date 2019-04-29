import update from 'immutability-helper';

const initialState = {
    playerList: [],
    userResultMessage: '',
};

function HighestScoreReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'FETCH_COMPLETED':
            return update(state, {
                $merge: {
                    playerList: action.payload,
                }
            });
        case 'ITEM_UPDATED':
            let itemIndexToUpdate;
            state.playerList.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    itemIndexToUpdate = index;
                }
            });

            return update(state, {
                playerList: {
                    [itemIndexToUpdate]: {
                        $set: action.payload,
                    }
                }
            });
        case 'PLAYER_KILLED':
            return update(state, {
                $merge: {
                    userResultMessage: action.payload,
                }
            });
        case 'PLAYER_WIN':
            return update(state, {
                $merge: {
                    userResultMessage: action.payload,
                }
            });
        default:
            return state;
    }
}

export default HighestScoreReducer;

