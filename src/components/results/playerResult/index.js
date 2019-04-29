import React from 'react';
import PropTypes from 'prop-types';

function PlayerResult(props)
{
    return(
        <tr >
            <th scope="row">{props.index}</th>
            <td>{props.name}</td>
            <td>{props.steps}</td>
            <td>{props.difficulty}</td>
            <td>{props.score}</td>
        </tr>
    )
}

PlayerResult.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    steps: PropTypes.number,
    difficulty: PropTypes.string,
    score: PropTypes.number,
};

export default PlayerResult;