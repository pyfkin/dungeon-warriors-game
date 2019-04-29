import itemTypes from '../consts/itemTypes';
import mapSettings from '../consts/mapSettings';
import {Difficulty} from "../consts/difficultyList";

export default class {
    constructor(_level) {
        this.map = [];
        this.level = _level;
        this.playerKoords = {
            x: 0,
            y: 0,
        };
        this.viewPort = [];
    }

    createMap() {
        this._createGrid();
        this._createWalls();

        this._createBoss();

        this._createItems(itemTypes.SKILL, mapSettings.skillCount);
        this._createItems(itemTypes.CERTIFICATION, mapSettings.certificationCount);
        this._createItems(itemTypes.ULTIMATE, mapSettings.ultimateCount);
        this._createItems(itemTypes.MEDECINE, mapSettings.medecineCount);

        this._createViewPort();

        return [this.map, this.playerKoords, this.viewPort];
    }

    _getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    _createXY(xStart = 0, xFinish = 0, yStart = 0, yFinish = 0) {
        let X = Math.floor(this._getRandomInt(xStart, this.map.length - 1 - xFinish));
        let Y = Math.floor(this._getRandomInt(yStart, 19 - yFinish));
        return {X, Y}
    }

    _createPlayer(start) {
        let counter = 1;
        while (counter) {
            let {X, Y} = this._createXY(start + 2, this.map.length - 10 - start + 2);
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = itemTypes.PLAYER;
                this.playerKoords.x = Y;
                this.playerKoords.y = X;
                counter--;
            }
        }
    }

    _createViewPort() {
        let startViewPort = this._getRandomInt(0, this.map.length - 1 - 10);
        for (let i = 0; i < 10; i++) {
            this.viewPort.push(startViewPort + i);
        }
        this._createPlayer(startViewPort);
    }

    _createGrid() {
        let rowsCount = 0;
        switch (this.level) {
            case Difficulty.EASY:
                rowsCount = mapSettings._1LevelRowsCount;
                break;
            case Difficulty.MEDIUM:
                rowsCount = mapSettings._2LevelRowsCount;
                break;
            case Difficulty.HARD:
                rowsCount = mapSettings._3LevelRowsCount;
                break;
            default:
                rowsCount = 25;
        }
        for (let i = 0; i < rowsCount; i++) {
            this.map.push([]);
            for (let j = 0; j < 20; j++) {
                this.map[i].push(itemTypes.POLE);
            }
        }
    }

    _createWalls() {
        let wallsDensityStart,
            wallsDensityFinish;
        switch (this.level) {
            case Difficulty.EASY:
                wallsDensityStart = mapSettings._1LevelWallsDensityStart;
                wallsDensityFinish = mapSettings._1LevelWallsDensityFinish;
                break;
            case Difficulty.MEDIUM:
                wallsDensityStart = mapSettings._2LevelWallsDensityStart;
                wallsDensityFinish = mapSettings._2LevelWallsDensityFinish;
                break;
            case Difficulty.HARD:
                wallsDensityStart = mapSettings._3LevelWallsDensityStart;
                wallsDensityFinish = mapSettings._3LevelWallsDensityFinish;
                break;
            default:
                wallsDensityStart = 1;
                wallsDensityFinish = 2;

        }
        for (let i = 0; i < this.map.length; i++) {
            let indexOfWall = [];
            let wallPerLineCount = Math.floor(this._getRandomInt(wallsDensityStart, wallsDensityFinish));
            for (let k = 0; k < wallPerLineCount; k++) {
                indexOfWall.push(this._getRandomInt(0, 19))
            }
            for (let j = 0; j < indexOfWall.length; j++) {
                this.map[i][indexOfWall[j]] = itemTypes.WALL;
            }
        }
    }

    _createItems(type, count) {
        let counter = count;
        while (counter) {
            let {X, Y} = this._createXY();
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = type;
                counter--;
            }
        }
    }

    _createBoss() {
        let {X, Y} = this._createXY(2, 4, 2, 3);
        this.map[X][Y] = itemTypes.BOSS;
        this.map[X + 1][Y] = itemTypes.BOSS;
        this.map[X][Y + 1] = itemTypes.BOSS;
        this.map[X + 1][Y + 1] = itemTypes.BOSS;

        for (let i = 0; i < 4; i++) {
            this.map[X - 1][Y - 1 + i] = itemTypes.BOSSWALLBIG;
            this.map[X + 2][Y - 1 + i] = itemTypes.BOSSWALLBIG;
            this.map[X - 1 + i][Y - 1] = itemTypes.BOSSWALLBIG;
            this.map[X - 1 + i][Y + 2] = itemTypes.BOSSWALLBIG;
        }

        for (let i = 0; i < 6; i++) {
            this.map[X - 2][Y - 2 + i] = itemTypes.BOSSWALLSMALL;
            this.map[X + 3][Y - 2 + i] = itemTypes.BOSSWALLSMALL;
            this.map[X - 2 + i][Y - 2] = itemTypes.BOSSWALLSMALL;
            this.map[X - 2 + i][Y + 3] = itemTypes.BOSSWALLSMALL;
        }
    }
}