import React, {useEffect, useState} from 'react';
import {inject, observer} from "mobx-react";
import {IconButton, LinearProgress} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {KeyboardArrowDown} from "@material-ui/icons";
import TimerIcon from '@material-ui/icons/Timer';
import useStyles from "./style";
import RoundResults from "./RoundResults";
import Music from "../../components/Audio";


const Play = (props) => {
    const {game} = props;
    const cl = useStyles();
    useEffect(() => {
        if (game.round) {
            game.round.start();
        }
    }, []);
    if (!game.currentTeam) {
        return props.history.push('/teams');
    }
    if (!game.round && !!game.currentTeam) {
        return props.history.push('/ready')
    }
    const progressPercents = (game.round.timeSec / game.settings.roundTimeSec) * 100;
    return (
        <div className={cl.root}>
            <Music/>
            <LinearProgress variant="determinate" color={"secondary"}
                            value={progressPercents}/>
            <div className={cl.top}>
                <div className={cl.team}>{game.currentTeam.name}</div>
                <div className={cl.time}>
                    <TimerIcon fontSize={"large"}/>
                    <span>{game.round.timeSec}</span>
                </div>
                <div className={cl.points}>{game.round.score}</div>
            </div>
            <div className={cl.main}>
                <div>
                    <IconButton className={cl.btn} color={"primary"} onClick={() => {
                        game.round.addPoints()
                    }}>
                        <KeyboardArrowUpIcon fontSize='inherit'/>
                    </IconButton>
                </div>
                <div className={cl.word}>{game.round.currentWord}</div>
                <div>
                    <IconButton className={cl.btn} color={"secondary"} onClick={() => {
                        game.round.minusPoints()
                    }}>
                        <KeyboardArrowDown fontSize='inherit'/>
                    </IconButton>
                </div>
            </div>
            <div className={cl.bottom}>
            </div>
            {game.round.finished && <RoundResults history={props.history} round={game.round}/>}
        </div>
    )
};
export default inject(({store}) => {
    return {
        game: store.game
    };
})(observer(Play));