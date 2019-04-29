import {connect} from 'react-redux';
import GameLog from '../components/gameLog/index';

const mapStateToProps = state => ({
    logText: state.games.logText,
    movesCount: state.moves.movesCount,
});


export default connect(mapStateToProps)(GameLog);