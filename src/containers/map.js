import {connect} from 'react-redux';
import Map from '../components/map/index';
import viewConsts from "../consts/views";


const mapStateToProps = state => ({
    koordsPlayer: state.moves.koordsPlayer,
    viewPort: state.moves.viewPort,
    db: state.moves.db,
    logText: state.moves.logText,

    inputDifficultyValue: state.settings.inputDifficultyValue,

    level: state.games.level,
    health: state.games.health,
    experience: state.games.experience,
    experienceLeftToCollect: state.games.experienceLeftToCollect,
    skills: state.games.skills,
    skillsLeftToCollect: state.games.skillsLeftToCollect,
    certifications: state.games.certifications,
    certificationsLeftToCollect: state.games.certificationsLeftToCollect,
    ultimate: state.games.ultimate,
    ultimateLeftToCollect: state.games.ultimateLeftToCollect,

    bossesKilled: state.games.bossesKilled,
});

const mapDispatchToProps = dispatch => ({
        keyLeft: () => dispatch({
            type: 'KEY_LEFT',
        }),
        keyDown: () => dispatch({
            type: 'KEY_DOWN',
        }),
        keyUp: () => dispatch({
            type: 'KEY_UP',
        }),
        keyRight: () => dispatch({
            type: 'KEY_RIGHT',
        }),
        getSkill: () => dispatch({
            type: 'SKILL_COLLECTED',
            payload: {
                exp: 100,
                log: '"Skill" has been collected.',
            },
        }),
        getCertification: () => dispatch({
            type: 'CERTIFICATION_COLLECTED',
            payload: {
                exp: 500,
                log: '"Certification" has been collected.',
            },
        }),
        getUltimate: () => dispatch({
            type: 'ULTIMATE_COLLECTED',
            payload: {
                exp: 1500,
                log: '"Ultimate skill" has been collected.',
            },
        }),
        getMedicine: () => dispatch({
            type: 'MEDICINE_COLLECTED',
            payload: {
                med: 1000,
                log: '"Medecine" has been collected.',
            },
        }),
        bossWallRuined: () => dispatch({
            type: 'BOSS_WALL_RUINED',
            payload: '"Boss wall" was destroyed.',
        }),
        bossAttacked: () => dispatch({
            type: 'BOSS_ATTACKED',
            payload: '"Boss" was attacked.',
        }),
        itemEdited: (side) => dispatch({
            type: 'ITEM_EDITED',
            side,
        }),
        itemNotEdited: (side) => dispatch({
            type: 'ITEM_NOT_EDITED',
            side,
            payload: 'Player made a move...',
        }),
        playerInjured: (count) => {
            let logText = '';
            if (count) {
                logText = 'Player was injured.';
            } else {
                logText = 'Player can\'t take this item.';
            }
            dispatch({
                type: 'PLAYER_INJURED',
                payload: {
                    count,
                    log: logText,
                },
            })
        },
        playerLevelUpped: () => dispatch({
            type: 'PLAYER_LEVEL_UPPED',
            payload: '"Player" level upped.',
        }),
        playerKilled: () => dispatch({
            type: 'PLAYER_KILLED',
            payload: 'Вы проиграли :(',
        }),
        playerWin: () => dispatch({
            type: 'PLAYER_WIN',
            payload: 'Вы победили :)',
        }),
        goToResults: () => dispatch({
            type: 'CHANGE_VIEW',
            payload: viewConsts.RESULTS,
        }),
        createDB: ([map, playerKoords, viewPort]) => dispatch({
            type: 'CREATE_DB',
            payload: {
                map,
                playerKoords,
                viewPort,
            },
        }),
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(Map);