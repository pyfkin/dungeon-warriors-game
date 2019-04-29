import {connect} from "react-redux";
import Results from '../components/results';
import viewsConsts from "../consts/views";


const mapStateToProps = state => ({
    playerList: state.highestScore.playerList,
    userResultMessage: state.highestScore.userResultMessage,
});

const mapDispatchToProps = dispatch => ({
    fetchPlayerList: () => dispatch({
        type: 'FETCH_PLAYER_LIST',
    }),
    clickRestartButton: () => dispatch({
        type: 'CHANGE_VIEW',
        payload: viewsConsts.SETTINGS,
    }),
    setDefaults: () => dispatch({
        type: 'SET_DEFAULTS',
    }),
    getPlayerName: () => dispatch({
        type: 'FETCH_PLAYER_NAME'
    })
});


export default connect(mapStateToProps, mapDispatchToProps)(Results);