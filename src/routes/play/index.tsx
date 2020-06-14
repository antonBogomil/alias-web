import React, {useEffect,} from 'react';
import {inject, observer} from "mobx-react";
import {IconButton, LinearProgress} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {KeyboardArrowDown} from "@material-ui/icons";
import TimerIcon from '@material-ui/icons/Timer';
import useStyles from "./style";
import RoundResults from "./results";
import Music from "../../components/Audio";
import RefreshIcon from '@material-ui/icons/Refresh';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import Footer from "../../components/Footer";
import Store from "../../store";
import {IHistory} from "../../types";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TeamAvatar from "../../components/Avatar";

interface IProps {
    store: Store
    history: IHistory
}

const Play = (props) => {
    const {store} = props;
    const game = store.root;
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

    function handleSkip() {
        game.round.finish();
    }

    function handlePause() {
        game.round.stop()
    }

    function handleResume() {
        game.round.start()
    }

    function handleRestart() {
        return props.history.push('/ready')
    }

    const progressPercents = (game.round.timeSec / game.settings.roundTimeSec) * 100;
    return (
        <div className={cl.root}>
            <Music/>
            <LinearProgress variant="determinate"
                            color={"secondary"}
                            value={progressPercents}/>
            <div className={cl.top}>
                <div className={cl.team}>
                    <TeamAvatar color={game.currentTeam.color} name={game.currentTeam.name}/>
                    {game.currentTeam.name}
                </div>
                <div className={cl.time}>
                    <TimerIcon fontSize={"large"}/>
                    <span>{game.round.timeSec}</span>
                </div>
                <div className={cl.points}>{game.round.score}</div>
            </div>
            <div className={cl.main}>
                <div>
                    <IconButton
                        className={cl.btn}
                        disabled={game.round.isPaused}
                        color={"primary"}
                        onClick={() => game.round.next(true)}
                    >
                        <KeyboardArrowUpIcon fontSize='inherit'/>
                    </IconButton>
                </div>
                <div className={cl.word}>{game.words.current}</div>
                <div>
                    <IconButton
                        className={cl.btn}
                        disabled={game.round.isPaused}
                        color={"secondary"}
                        onClick={() => game.round.next(false)}
                    >
                        <KeyboardArrowDown fontSize='inherit'/>
                    </IconButton>
                </div>
            </div>
            <Footer>

                {
                    game.round.isPaused ?
                        <IconButton onClick={handleResume}>
                            <PlayArrowIcon/>
                        </IconButton>
                        :
                        <IconButton onClick={handlePause}>
                            <PauseIcon/>
                        </IconButton>
                }

                <IconButton onClick={handleRestart}>
                    <RefreshIcon/>
                </IconButton>
                <IconButton onClick={handleSkip}>
                    <SkipNextIcon/>
                </IconButton>
            </Footer>
            {game.round.finished && <RoundResults history={props.history} round={game.round}/>}
        </div>
    )
};
export default inject('store')(observer(Play));
