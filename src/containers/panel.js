import {connect} from 'react-redux';
import Panel from '../components/panel/index';

const mapStateToProps = state => ({
    ruleText: state.games.ruleText,
});

export default connect(mapStateToProps)(Panel);