import React from 'react';
import PropTypes from 'prop-types';
import './stats.css'
import {BOSS, BOSSWALLBIG, BOSSWALLSMALL, Certifications, Medecine, Skills, Ultimate} from "../../consts/itemIcons";


function Stats({
                   name, level, health, experience, experienceLeftToCollect, skills, skillsLeftToCollect,
                   certifications, certificationsLeftToCollect, ultimate, ultimateLeftToCollect
               }) {
    return (
        <div className="col-3">
            <div className='user-stats'>
                <p className='player-header'><span className='player-name'>{name}</span> statistics:</p>
                <p>Level: {level}</p>
                <p>Health: {health}</p>
                <p>Experience: {experience}/{experienceLeftToCollect}</p>
                <p>Skills: {skills}/{skillsLeftToCollect}</p>
                <p>Certifications: {certifications}/{certificationsLeftToCollect}</p>
                <p>Ultimate skills: {ultimate}/{ultimateLeftToCollect}</p>
            </div>
            <div className='item-icons'>
                <div>"Simple Skills" looks like: {Skills.SimpleSkill}</div>
                <div>"Certifikations" looks like: {Certifications.Passive1}</div>
                <div>"Ultimate Skills" looks like: {Ultimate.Wind}</div>
                <div>"Elixir of health" looks like: {Medecine.Life}</div>
                <div>"Small Wall Of Boss" looks like: {BOSSWALLSMALL.BOSSWALLSMALL1}</div>
                <div>"Big Wall Of Boss" looks like: {BOSSWALLBIG.BOSSWALLBIG1}</div>
                <div>"Main Boss" looks like{BOSS.BOSS1}</div>
            </div>
        </div>
    );
}

Stats.propTypes = {
    name: PropTypes.string,
    level: PropTypes.number,
    health: PropTypes.number,
    experience: PropTypes.number,
    experienceLeftToCollect: PropTypes.number,
    skills: PropTypes.number,
    skillsLeftToCollect: PropTypes.number,
    certifications: PropTypes.number,
    certificationsLeftToCollect: PropTypes.number,
    ultimate: PropTypes.number,
    ultimateLeftToCollect: PropTypes.number,
};

export default Stats;