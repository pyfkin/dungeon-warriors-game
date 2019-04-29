import itemTypes from '../consts/itemTypes';
import keyTypes from '../consts/keyTypes';


class GameService
{
    isWall(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return koords.y <= 0 || db[koords.y - 1][koords.x] === itemTypes.WALL;
            case keyTypes.DOWN:
                return koords.y >= db.length - 1 || db[koords.y + 1][koords.x] === itemTypes.WALL;
            case keyTypes.LEFT:
                if (koords.x === 0) {
                    return db[koords.y][19] === itemTypes.WALL;
                }
                return db[koords.y][koords.x - 1] === itemTypes.WALL;
            case keyTypes.RIGHT:
                if (koords.x === 19) {
                    return db[koords.y][0] === itemTypes.WALL;
                }
                return db[koords.y][koords.x + 1] === itemTypes.WALL;
            default:
                return false;
        }
    }

    isNextItem(type, key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koords.y - 1][koords.x] === type;
            case keyTypes.DOWN:
                return db[koords.y + 1][koords.x] === type;
            case keyTypes.LEFT:
                if (koords.x === 0) {
                    return db[koords.y][19] === type;
                }
                return db[koords.y][koords.x - 1] === type;
            case keyTypes.RIGHT:
                if (koords.x === 19) {
                    return db[koords.y][0] === type;
                }
                return db[koords.y][koords.x + 1] === type;
            default:
                return false;
        }
    }
}

export default new GameService();