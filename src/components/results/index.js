import React from 'react';
import PropTypes from 'prop-types';
import PlayerResult from './playerResult/index';
import './results.css';


class Results extends React.Component
{
    componentWillMount() {
        this.props.fetchPlayerList();
    }

    _resumeDefaults = () => {
        this.props.setDefaults();
        this.props.clickRestartButton();
        this.props.getPlayerName();
    };

    render() {
        return (
            <>
                <h3 className='offset-md-1 col-11 user-message'>{this.props.userResultMessage}</h3>
                    <table className='table table-sm table-hover col-10 offset-md-1 fixed_header'>
                       <thead>
                        <tr>
                            <th>#</th>
                            <th>Player Name</th>
                            <th>Step's count</th>
                            <th>Difficulty</th>
                            <th>Total score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.playerList.map(({id, name, steps, difficulty, score}, index) => (
                                <PlayerResult key={id} index={index + 1} name={name} steps={steps}
                                              difficulty={difficulty} score={score}/>
                            ))
                        }
                        </tbody>
                    </table>
                <button onClick={this._resumeDefaults} type='button'
                        className='col-2 offset-md-9 btn btn-danger'>Restart
                </button>
            </>
        )
    }
}

Results.propsTypes = {
    playerList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        steps: PropTypes.number,
        difficulty: PropTypes.string,
        score: PropTypes.number,
        id: PropTypes.number,
    })),
    userResultMessage: PropTypes.string,

    fetchPlayerList: PropTypes.func,
    clickRestartButton: PropTypes.func,
    setDefaults: PropTypes.func,
};

export default Results;