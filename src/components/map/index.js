import React from 'react';
import PropTypes from 'prop-types';
import ItemLine from '../itemLine/index';
import gameService from '../../services/gameService';
import levelService from '../../services/levelService';
import CreateMapService from '../../services/createMapService';
import itemTypes from '../../consts/itemTypes';
import keyTypes from '../../consts/keyTypes';
import './map.css';



class Map extends React.Component {
    _gameOver = (isWin) => {
        if (isWin) {
            this.props.playerWin();
        } else {
            this.props.playerKilled();
            this.props.goToResults();
        }
    };

    _itemLogic = (itemType, _keyType, koords, db, level) => {
        if (levelService.checkLevelLogic(level, itemType)) {
            switch (itemType) {
                case itemTypes.SKILL:
                    this.props.getSkill();
                    break;
                case itemTypes.CERTIFICATION:
                    this.props.getCertification();
                    break;
                case itemTypes.ULTIMATE:
                    this.props.getUltimate();
                    break;
                case itemTypes.MEDECINE:
                    this.props.getMedicine();
                    break;
                case itemTypes.BOSSWALLSMALL:
                case itemTypes.BOSSWALLBIG:
                    this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
                    if (levelService.checkPlayerKilled(this.props.health)) {
                        this._gameOver(false);
                    }
                    this.props.bossWallRuined();
                    break;
                case itemTypes.BOSS:
                    this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
                    if (levelService.checkPlayerKilled(this.props.health)) {
                        this._gameOver(false);
                    }
                    this.props.bossAttacked();
                    if (levelService.checkBossLifes(this.props.bossesKilled)) {
                        this._gameOver(true);
                    }
                    break;
                default:
                    break;
            }
            this.props.itemEdited(_keyType);
            if (levelService.checkLevelUp(level, this.props.skills, this.props.certifications, this.props.ultimate)) {
                this.props.playerLevelUpped();
            }
        } else {
            this.props.itemNotEdited(_keyType);
            this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
            if (levelService.checkPlayerKilled(this.props.health)) {
                this._gameOver(false);
            }
        }
    };

    _moveLogic = (_keyType) => {
        if (!gameService.isWall(_keyType, this.props.koordsPlayer, this.props.db)) {
            if (gameService.isNextItem(itemTypes.POLE, _keyType, this.props.koordsPlayer, this.props.db)) {
                this.props.itemNotEdited(_keyType);
            }
            for (let item in itemTypes) {
                if (itemTypes[item] !== itemTypes.POLE && itemTypes[item] !== itemTypes.PLAYER && itemTypes[item] !== itemTypes.WALL) {
                    if (gameService.isNextItem(itemTypes[item], _keyType, this.props.koordsPlayer, this.props.db)) {
                        this._itemLogic(itemTypes[item], _keyType, this.props.koordsPlayer, this.props.db, this.props.level);
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    };

    _keyPressed = (e) => {
        let keyType;
        switch (e.keyCode) {
            case 37:
                keyType = keyTypes.LEFT;
                if (this._moveLogic(keyType))
                    this.props.keyLeft();
                break;
            case 40:
                keyType = keyTypes.DOWN;
                if (this._moveLogic(keyType))
                    this.props.keyDown();
                break;
            case 38:
                keyType = keyTypes.UP;
                if (this._moveLogic(keyType))
                    this.props.keyUp();
                break;
            case 39:
                keyType = keyTypes.RIGHT;
                if (this._moveLogic(keyType))
                    this.props.keyRight();
                break;
            default:
                break;
        }
    };

    componentWillMount() {
        this.props.createDB(new CreateMapService(this.props.inputDifficultyValue).createMap());
        document.addEventListener("keydown", this._keyPressed);
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", this._keyPressed);
    };

    render() {
        return (
            <div className="map">
                {
                    this.props.viewPort.map((yIndex) => (
                        <ItemLine key={yIndex} yKoord={yIndex} itemsType={this.props.db[yIndex]}/>))
                }
            </div>
        );
    }
}

Map.propTypes = {
    koordsPlayer: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    viewPort: PropTypes.arrayOf(PropTypes.number),
    db: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    inputDifficultyValue: PropTypes.string,
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
    bossesKilled: PropTypes.number,

    keyLeft: PropTypes.func,
    keyDown: PropTypes.func,
    keyUp: PropTypes.func,
    keyRight: PropTypes.func,
    getSkill: PropTypes.func,
    getCertification: PropTypes.func,
    getUltimate: PropTypes.func,
    getMedicine: PropTypes.func,
    bossWallRuined: PropTypes.func,
    bossAttacked: PropTypes.func,
    itemEdited: PropTypes.func,
    itemNotEdited: PropTypes.func,
    playerInjured: PropTypes.func,
    playerLevelUpped: PropTypes.func,
    playerKilled: PropTypes.func,
    playerWin: PropTypes.func,
    goToResults: PropTypes.func,
    createDB: PropTypes.func,


};

export default Map;
