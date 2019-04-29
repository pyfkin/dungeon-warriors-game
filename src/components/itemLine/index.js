import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item/index';
import './itemLine.css'

function ItemLine({itemsType, yKoord}) {
    return (
        <div className="itemLine">
            {
                itemsType.map((value, index) => (<Item key={index} yKoord={yKoord} xKoord={index} type={value}/>))
            }
        </div>
    );
}

ItemLine.propTypes = {
    itemsType: PropTypes.arrayOf(PropTypes.string),
    yKoord: PropTypes.number,
};

export default ItemLine;