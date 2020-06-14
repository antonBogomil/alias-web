import React from 'react';
import {Button, Container, Fab, Grid, makeStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"
import {AddModal} from "./components/Modal";
import {TeamsList} from "./components/List";
import {inject, observer} from "mobx-react";
import Footer from '../../components/Footer';
import useTranslations from "../../services/translations";
import Store from "../../store";
import {shouldCancelStart} from './utils';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => {
    return {
        center: {
            textAlign: 'center'
        },
        resetBtn: {
            // background: theme.palette.error.light
        }
    }
});

interface IProps {
    store: Store
    history: History
}

const TeamsPage = (props: IProps) => {
    const {store: {root: {teams}}, history} = props
    const cl = useStyles();
    const t = useTranslations();
    const list = teams.list;

    const navigation = {
        next: teams.list.length > 1 ? '/ready' : null
    }

    function handleDeleteTeam(id: number) {
        teams.delete(id)
    }

    function handleAddTeam(teamName: string) {
        teams.add(teamName)
    }

    function handleReset() {
        teams.reset()
    }


    return (
        <div className='wrapper'>
            <Grid
                container
                justify='space-between'
                alignItems='center'
            >
                <h1>{t.TEAMS}</h1>
                <Button
					startIcon={<DeleteIcon />}
                    color='secondary'
					variant="outlined"
                    className={cl.resetBtn}
                    onClick={handleReset}
                >
                    {t.RESET}
                </Button>
            </Grid>
            <TeamsList
                items={list}
                pressDelay={60}
                lockAxis='y'
                lockToContainerEdges={true}
                axis='y'
                shouldCancelStart={shouldCancelStart}
                handleDelete={handleDeleteTeam}
            />
            <AddModal
                handleClose={() => teams.openAdd(false)}
                open={teams.addModalOpen}
                handleAdd={handleAddTeam}
                validate={teams.validate}
            />
            <div className={cl.center}>
                {
                    teams.canAdd &&
                    <Fab
                        color="primary"
                        onClick={() => teams.openAdd(true)}
                        aria-label="add"
                    >
                        <AddIcon/>
                    </Fab>
                }
            </div>
            <Footer history={history} navigation={navigation}/>
        </div>
    );
};
export default inject(({store}) => {
    return {
        store: store
    };
})(observer((TeamsPage)));
