import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import useTranslations from "../../../services/translations";

export const DeleteModal = ({open, handleClose, handleDelete, message}) => {
    const t = useTranslations();
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{t.DELETE_TEAM_TITLE}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {/*{t.DELETE_TEAM_Q}*/}
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    {t.CANCEL}
                </Button>
                <Button onClick={handleDelete} color="secondary">
                    {t.OK}
                </Button>
            </DialogActions>
        </Dialog>
    )
};
export const AddModal = ({open, handleClose, handleAdd, message}) => {
    const [teamData, setTeamData] = useState({
        name: ''
    });
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Create team</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
                <TextField id="standard-basic" label="Name" value={teamData.name} onChange={(e) => {
                    setTeamData({
                        name: e.target.value
                    })
                }}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {
                    handleAdd(teamData)
                }} color="secondary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
};
