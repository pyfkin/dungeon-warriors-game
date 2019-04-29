import React, {memo} from 'react';
import PropTypes from 'prop-types';
import itemTypes from '../../consts/itemTypes';
import { Skills, Certifications, Ultimate, Medecine, BOSS, BOSSWALLBIG, BOSSWALLSMALL } from '../../consts/itemIcons';
import './item.css'


function Item({type})
{
    let icon;
    switch (type) {
        case itemTypes.BOSSWALLSMALL:
            icon = BOSSWALLSMALL.BOSSWALLSMALL1;
            break;
        case itemTypes.BOSSWALLBIG:
            icon = BOSSWALLBIG.BOSSWALLBIG1;
            break;
        case itemTypes.BOSS:
            icon = BOSS.BOSS1;
            break;
        case itemTypes.MEDECINE:
            icon = Medecine.Life;
            break;
        case itemTypes.CERTIFICATION:
            icon = Certifications.Passive1;
            break;
        case itemTypes.ULTIMATE:
            icon = Ultimate.Wind;
            break;
        case itemTypes.SKILL:
            icon = Skills.SimpleSkill;
            break;
        default:
            icon = null;
    }
    return (
        <div className={type}>
            {icon}
        </div>)
}

Item.propTypes = {
    type: PropTypes.string,
};

export default memo(Item);
