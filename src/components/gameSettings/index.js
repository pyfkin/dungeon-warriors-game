import React from 'react';
import PropTypes from 'prop-types';
import RadioLevels from '../../containers/radioLevels';
import difficultyList from '../../consts/difficultyList';
import ModalMessage from '../../containers/modalMessage';
import './gameSettings.css';


function GameSettings({inputNameValue, onStartGame, onInputNameChanged, clearInputNameValue, onModalShow}) {
    const _clickStartButton = () => {
        if (inputNameValue !== '') {
            localStorage.setItem("name", inputNameValue);
            onStartGame();

        } else {
            onModalShow();
        }
    };

    return (
        <>
            <ModalMessage/>
            <div className='game-settings col-12'>
                <h3>Game Settings</h3>
                <div className="input-group col-4">
                    <label className='name-label col-12'>Player Name:</label>
                    <input type="text" className='form-control name-input' placeholder='Input Player Name'
                           onChange={onInputNameChanged} value={inputNameValue}/>
                    <label className='difficulty-label col-12'>Select difficulty:</label>
                    {difficultyList.map((item, index) => <RadioLevels key={index} index={index + 1} value={item}/>)}
                </div>
                <button onClick={_clickStartButton} type="button" className="btn btn-primary">Start Game</button>
            </div>
        </>
    )
}

GameSettings.propTypes = {
    inputNameValue: PropTypes.string,
    onStartGame: PropTypes.func,
    onInputNameChanged: PropTypes.func,
    onModalShow: PropTypes.func,
};

export default GameSettings;
