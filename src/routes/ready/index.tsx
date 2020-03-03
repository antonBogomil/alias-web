import React, {useEffect} from 'react';
import {inject, observer} from "mobx-react";
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Ready = (props) => {
    const {game,history} = props;
    useEffect(() => {
    }, []);
    function onNext() {
        game.createRound();
        history.push('/play')
    }
    function onBack() {
        history.push('/teams')
    }
    return (
        <div>
            <Dialog open={true}>
                <DialogTitle>
                    <div dangerouslySetInnerHTML={{__html: `Team "<b>${game.currentTeam.name}</b>" are you ready?`}}/>
                </DialogTitle>
                <DialogContent>
                    <Button onClick={onBack}>Back</Button>
                    <Button onClick={onNext} color={"secondary"}>Yes. Go</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default observer(inject(({store}) => {
    return {
        game: store.game
    };
})(Ready));