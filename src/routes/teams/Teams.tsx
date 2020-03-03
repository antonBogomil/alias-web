import React, {useState} from 'react';
import {Fab, makeStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"
import arrayMove from 'array-move';
import {AddModal, DeleteModal} from "./components/Modal";
import {TeamsList} from "./components/List";
import {inject, observer} from "mobx-react";
import Footer from '../../components/Footer';
import {inspect} from "util";
import useTranslations from "../../services/translations";

function shouldCancelStart(e) {
    if (['button', 'svg', 'span', 'path'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
        return true;
    }
}

const useStyles = makeStyles({
    center: {
        textAlign: 'center'
    }
});

const TeamsPage = ({store,history}) => {
    const cl = useStyles();
    const t = useTranslations();
    const [teamToDelete, setTeamToDelete] = useState({
        id: null,
        name: null
    });
    const [isOpenAdd, setOpenAdd] = useState(false);
    const list = store.list;
    const navigation = {
        // back: '/',
        next: store.list.length ? '/ready': null
    }
    return (
        <div className='wrapper'>
            <h1>{t.TEAMS}</h1>
            <TeamsList
                items={list}
                pressDelay={60}
                lockAxis='y'
                height={300}
                lockToContainerEdges={true}
                axis='y'
                shouldCancelStart={shouldCancelStart}
                handleDelete={(item) => {
                    setTeamToDelete(item)
                }}
            />
            <DeleteModal
                open={!!teamToDelete.id}
                handleClose={() => {
                    setTeamToDelete({
                        id: null,
                        name: null
                    })
                }}
                handleDelete={() => {
                    store.delete(teamToDelete.id)
                    setTeamToDelete({
                        id: null,
                        name: null
                    })
                }}
                message={teamToDelete.name}
            />
            <AddModal
                handleClose={() => {
                    setOpenAdd(false)
                }}
                open={isOpenAdd}
                handleAdd={(data) => {
                    setOpenAdd(false);
                    store.add(data)
                }}
                message={""}
            />
            <div className={cl.center}>
                <Fab color="primary" onClick={() => {
                    setOpenAdd(true)
                }} aria-label="add">
                    <AddIcon/>
                </Fab>
            </div>
            <Footer history={history} navigation={navigation} />
        </div>
    );
};
const navigation = {
    next: '/ready',
    prev: null
};
export default observer(inject(({store}) => {
    return {
        store: store.game.teams
    };
})(TeamsPage));
