import update from 'immutability-helper';
import itemTypes from '../consts/itemTypes';
import keyTypes from '../consts/keyTypes';


const initialState = {
    koordsPlayer: {},
    viewPort: [],
    prevPoleType: itemTypes.POLE,
    nextPoleType: itemTypes.POLE,
    db: [],
    movesCount: 0,
    logText: '',
};

function movesReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'CREATE_DB':
            return update(state, {
                $merge: {
                    viewPort: action.payload.viewPort,
                    db: action.payload.map,
                    koordsPlayer: {
                        x: action.payload.playerKoords.x,
                        y: action.payload.playerKoords.y,
                    },
                }
            });
        case 'KEY_UP':
            let newViewPort_up = state.viewPort;
            if (state.koordsPlayer.y <= state.viewPort[2] && state.koordsPlayer.y >= 3)
                newViewPort_up = [state.viewPort.slice(0, 1) - 1].concat(state.viewPort.slice(0, state.viewPort.length - 1));

            return update(state, {
                koordsPlayer: {
                    y: {
                        $set: state.koordsPlayer.y - 1
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        }
                    },
                },
                $merge: {
                    viewPort: newViewPort_up,
                    prevPoleType: state.nextPoleType,
                    movesCount: state.movesCount + 1,
                }
            });
        case 'KEY_DOWN':
            let newViewPort_down = state.viewPort;
            if (state.koordsPlayer.y >= state.viewPort[7] && state.koordsPlayer.y <= state.db.length - 4)
                newViewPort_down = [].concat(state.viewPort.slice(1, state.viewPort.length),
                    +state.viewPort.slice(state.viewPort.length - 1) + 1);

            return update(state, {
                koordsPlayer: {
                    y: {
                        $set: state.koordsPlayer.y + 1
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        }
                    },
                },
                $merge: {
                    viewPort: newViewPort_down,
                    prevPoleType: state.nextPoleType,
                    movesCount: state.movesCount + 1,
                }
            });
        case 'KEY_LEFT':
            let _x_left;
            if (state.koordsPlayer.x === 0) {
                _x_left = -19;
            } else {
                _x_left = 1;
            }
            return update(state, {
                koordsPlayer: {
                    x: {
                        $set: state.koordsPlayer.x - _x_left
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        },
                    },
                },
                $merge: {
                    prevPoleType: state.nextPoleType,
                    movesCount: state.movesCount + 1,
                },
            });
        case 'KEY_RIGHT':
            let _x_right;
            if (state.koordsPlayer.x === 19) {
                _x_right = -19;
            } else {
                _x_right = 1;
            }
            return update(state, {
                koordsPlayer: {
                    x: {
                        $set: state.koordsPlayer.x + _x_right
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        },
                    },
                },
                $merge: {
                    prevPoleType: state.nextPoleType,
                    movesCount: state.movesCount + 1,
                },
            });
        case 'ITEM_EDITED':
            let _x_edited, _y_edited;
            switch (action.side) {
                case keyTypes.UP:
                    _x_edited = 0;
                    _y_edited = -1;
                    break;
                case keyTypes.DOWN:
                    _x_edited = 0;
                    _y_edited = 1;
                    break;
                case keyTypes.LEFT:
                    if (state.koordsPlayer.x === 0) {
                        _x_edited = 19;
                    } else {
                        _x_edited = -1;
                    }
                    _y_edited = 0;
                    break;
                case keyTypes.RIGHT:
                    if (state.koordsPlayer.x === 19) {
                        _x_edited = -19;
                    } else {
                        _x_edited = 1;
                    }
                    _y_edited = 0;
                    break;
                default:
                    break;
            }
            return update(state, {
                db: {
                    [state.koordsPlayer.y + _y_edited]: {
                        [state.koordsPlayer.x + _x_edited]: {
                            $set: itemTypes.PLAYER
                        }
                    }
                },
                $merge: {
                    nextPoleType: itemTypes.POLE
                }
            });
        case 'ITEM_NOT_EDITED':
            let _x_not_edited, _y_not_edited;
            switch (action.side) {
                case keyTypes.UP:
                    _x_not_edited = 0;
                    _y_not_edited = -1;
                    break;
                case keyTypes.DOWN:
                    _x_not_edited = 0;
                    _y_not_edited = 1;
                    break;
                case keyTypes.LEFT:
                    if (state.koordsPlayer.x === 0) {
                        _x_not_edited = 19;
                    } else {
                        _x_not_edited = -1;
                    }
                    _y_not_edited = 0;
                    break;
                case keyTypes.RIGHT:
                    if (state.koordsPlayer.x === 19) {
                        _x_not_edited = -19;
                    } else {
                        _x_not_edited = 1;
                    }
                    _y_not_edited = 0;
                    break;
                default:
                    break;
            }
            let tempPoleType = state.db[state.koordsPlayer.y + _y_not_edited][state.koordsPlayer.x + _x_not_edited];
            return update(state, {
                db: {
                    [state.koordsPlayer.y + _y_not_edited]: {
                        [state.koordsPlayer.x + _x_not_edited]: {
                            $set: itemTypes.PLAYER
                        }
                    }
                },
                $merge: {
                    nextPoleType: tempPoleType,
                }
            });
        default:
            return state;
    }
}

export default movesReducer;