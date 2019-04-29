import itemTypes from '../consts/itemTypes';
import levelsList from '../consts/levelsList';
import playerStats from '../consts/playerStats';


class LevelService
{
    checkLevelLogic(level, itemType)
    {
        switch (level) {
            case levelsList.LEVEL_1:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                    default:
                        return false;
                }
            case levelsList.LEVEL_2:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                    default:
                        return false;
                }
            case levelsList.LEVEL_3:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return true;
                    default:
                        return false;
                }
            case levelsList.LEVEL_4:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return true;
                    case itemTypes.ULTIMATE:
                        return true;
                    case itemTypes.BOSSWALLSMALL:
                        return true;
                    default:
                        return false;
                }
            case levelsList.LEVEL_5:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return true;
                    case itemTypes.ULTIMATE:
                        return true;
                    case itemTypes.MEDECINE:
                        return true;
                    case itemTypes.BOSSWALLSMALL:
                        return true;
                    case itemTypes.BOSSWALLBIG:
                        return true;
                    case itemTypes.BOSS:
                        return true;
                    default:
                        return false;
                }
            default:
                return false;
        }
    }

    checkLevelUp(level, skillCount, certioficationCount, ultimateCount)
    {
        if (level < playerStats.maxLevel) {
            return playerStats[`LEVEL_${level}`].SKILL_EXPERIENCE * skillCount
                + playerStats[`LEVEL_${level}`].CERTIFICATION_EXPERIENCE * certioficationCount
                + playerStats[`LEVEL_${level}`].ULTIMATE_EXPERIENCE * ultimateCount
                >= playerStats[`LEVEL_${level}`].PLAYER_EXPERIENCE;
        }
    }

    checkLevelDamage(level, itemType)
    {
        switch (level) {
            case levelsList.LEVEL_1:
                switch (itemType) {
                    case itemTypes.CERTIFICATION:
                        return playerStats[`LEVEL_${level}`].DAMAGE.CERTIFICATION;
                    case itemTypes.ULTIMATE:
                        return playerStats[`LEVEL_${level}`].DAMAGE.ULTIMATE;
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case levelsList.LEVEL_2:
                switch (itemType) {
                    case itemTypes.ULTIMATE:
                        return playerStats[`LEVEL_${level}`].DAMAGE.ULTIMATE;
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case levelsList.LEVEL_3:
                switch (itemType) {
                    case itemTypes.ULTIMATE:
                        return playerStats[`LEVEL_${level}`].DAMAGE.ULTIMATE;
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case levelsList.LEVEL_4:
                switch (itemType) {
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case levelsList.LEVEL_5:
                switch (itemType) {
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[`LEVEL_${level}`].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            default:
                return 0;
        }
    }

    checkBossLifes(lifesCount){
        return lifesCount === playerStats.bossLifes;
    }

    checkPlayerKilled(health)
    {
        return health <= 0;
    }
}

export default new LevelService();