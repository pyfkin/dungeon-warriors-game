import React from 'react';
import PropTypes from 'prop-types';
import Map from '../../containers/map';
import GameLog from '../../containers/gameLog';
import './panel.css';


function Panel({ruleText}) {
    return (
        <div className="panel col-8">
            <GameLog/>
            <Map/>
            <pre className='game-rules col-12'>{ruleText}</pre>
        </div>
    );
}

Panel.propTypes = {
    ruleText: PropTypes.string,
};

export default Panel;