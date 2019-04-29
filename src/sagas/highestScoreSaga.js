import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import highestScoreService from '../services/highestScoreService';
import viewConsts from '../consts/views';
import difficultyList from "../consts/difficultyList";


function* fetchList()
{
    const playerList = yield call(highestScoreService.getPlayerList);
    yield put({type: 'FETCH_COMPLETED', payload: playerList});
}

function* playerWin()
{
    let newResults = {};
    newResults.name = yield select(state => state.settings.inputNameValue);
    let movesCount = yield select(state => state.moves.movesCount + 1);
    let difficulty = yield select(state => state.settings.inputDifficultyValue);
    newResults.steps = movesCount;
    newResults.difficulty = difficulty;
    newResults.score = movesCount * (difficultyList.indexOf(difficulty) + 1);

    let item = yield call(highestScoreService.addResultToDB, newResults);
    yield put({type: "ITEM_UPDATED", payload: item});
    yield put({type: "CHANGE_VIEW", payload: viewConsts.RESULTS});
}


function* fetchListSaga()
{
    yield takeLatest('FETCH_PLAYER_LIST', fetchList)
}

function* playerWinSaga()
{
    yield takeLatest('PLAYER_WIN', playerWin)
}

export default function* rootSaga()
{
    yield all([
        fetchListSaga(),
        playerWinSaga(),
    ])
}