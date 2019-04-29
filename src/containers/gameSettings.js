import {connect} from 'react-redux';
import GameSettings from '../components/gameSettings';
import viewConsts from "../consts/views";


const mapStateToProps = state => ({
    inputNameValue: state.settings.inputNameValue,
});

const mapDispatchToProps = dispatch => ({
    onStartGame: () => dispatch({
        type: 'CHANGE_VIEW',
        payload: viewConsts.GAME,
    }),
    onInputNameChanged: (e) => dispatch({
        type: "ON_INPUT_NAME_CHANGED",
        payload: e.target.value,
    }),
    onModalShow: () => dispatch({
        type: 'SHOW_MODAL',
        payload: true,
    }),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);