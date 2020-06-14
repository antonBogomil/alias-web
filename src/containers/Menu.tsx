import React from 'react';
import {inject, observer} from "mobx-react";
import Store from "../store";
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import {IHistory} from "../types";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {withRouter} from 'react-router-dom';
import StopIcon from '@material-ui/icons/Stop';

type IProps = {
    store: Store,
    history: IHistory
}

const Menu = (props: IProps) => {
    const {store, history} = props;


    function handleRestart() {
        store.root.restart();
    }

    function handleFinish() {
        props.history.push('/table')
    }

    return (
        <List>
            <ListItem onClick={() => history.push('/ready')} button key={'Continue'}>
                <ListItemIcon>
                    <PlayArrowIcon/>
                </ListItemIcon>
                <ListItemText primary={'Continue'}/>
            </ListItem>
            <ListItem onClick={handleFinish} button key={'Finish'}>
                <ListItemIcon>
                    <StopIcon/>
                </ListItemIcon>
                <ListItemText primary={'Finish'}/>
            </ListItem>
            <ListItem onClick={handleRestart} button key={'Restart'}>
                <ListItemIcon>
                    <AutorenewIcon/>
                </ListItemIcon>
                <ListItemText primary={'Restart'}/>
            </ListItem>
            <ListItem onClick={() => history.push('/teams')} button key={'Teams'}>
                <ListItemIcon>
                    <GroupAddIcon/>
                </ListItemIcon>
                <ListItemText primary={'Teams'}/>
            </ListItem>
            <ListItem onClick={() => history.push('/table')} button key={'Results'}>
                <ListItemIcon>
                    <AssessmentIcon/>
                </ListItemIcon>
                <ListItemText primary={'Results'}/>
            </ListItem>
            <ListItem onClick={() => history.push('/settings')} button key={'Settings'}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary={'Settings'}/>
            </ListItem>
        </List>);
};


const MenuContainer = inject(({store}) => {
    return {
        store: store
    };
})(observer((withRouter(function (props: any) {
    return <Menu {...props}/>
}))))

export default MenuContainer


