import React from 'react';
import {GiBrain, GiWhirlwind, GiHeartBottle} from 'react-icons/gi';
import {GiSurprisedSkull} from 'react-icons/gi';
import {GiRobotGolem, GiSpikedDragonHead} from 'react-icons/gi';
import {GiSecretBook} from "react-icons/gi";

const Certifications = {
    Passive1: <GiBrain color='orange'/>,
};

const Ultimate = {
    Wind: <GiWhirlwind color='blue'/>
};

const Medecine = {
    Life: <GiHeartBottle color='green'/>
};

const Skills = {
    SimpleSkill: <GiSecretBook color='yellow'/>
};

const BOSSWALLSMALL = {
    BOSSWALLSMALL1: <GiRobotGolem color='red'/>,
};

const BOSSWALLBIG = {
    BOSSWALLBIG1: <GiSpikedDragonHead color='red'/>,
};

const BOSS = {
    BOSS1: <GiSurprisedSkull color='black'/>
};

export {Certifications, Medecine, Skills, Ultimate, BOSS, BOSSWALLBIG, BOSSWALLSMALL};
