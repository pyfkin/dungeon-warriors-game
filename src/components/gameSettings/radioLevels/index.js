import React from 'react';
import PropTypes from 'prop-types';


function RadioLevels({inputDifficultyValue, difficultyValueChanged, index, value})
{
    let check = false;
    if ((value) === inputDifficultyValue) {
        check = true;
    }
    return (
            <div className='form-check col-12'>
                <label className="form-check-label" htmlFor={index}>
                    <input className="form-check-input" type="radio" name="levelRadios" id={index}
                           value={value} onClick={difficultyValueChanged} defaultChecked={check}/>
                    {value}
                    <span className="checkmark"> </span>
                </label>
            </div>
    )
}

RadioLevels.propTypes = {
    inputDifficultyValue: PropTypes.string,
    difficultyValueChanged: PropTypes.func,
    index: PropTypes.number,
    value: PropTypes.string,
};

export default RadioLevels;
