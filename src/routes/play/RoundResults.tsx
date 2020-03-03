import React from 'react';
import {Dialog, DialogContent, DialogTitle, Grid, Icon, ListItem, ListItemText, Switch} from "@material-ui/core";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import IconNext from '@material-ui/icons/KeyboardArrowRight'
import useTranslations from "../../services/translations";
import DialogContentText from "@material-ui/core/DialogContentText";
import {observer} from "mobx-react";

const RoundResults = ({round,history}) => {
    const t = useTranslations();
    return (
        <Dialog open={true}>
            <DialogTitle>{t.ROUND_FINISHED}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t.TEAM_SCORE}
                    :
                    {round.score}
                </DialogContentText>
                <Grid container>
                    <List>
                        {round.history.map(item => {
                            return (
                                <ListItem button key={item.word + item.status}>
                                    <Grid container item alignItems={'center'} xs={12} spacing={1}>
                                        <Grid item xs={8}>
                                            <ListItemText>{item.word}</ListItemText>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Switch
                                                checked={item.status}
                                                onChange={() => {
                                                    round.changeHistory(item.word)
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </DialogContent>
            <Button size={"large"} onClick={() => {
                history.push('/table')
            }} color="secondary">
                {t.NEXT}
                <IconNext/>
            </Button>
        </Dialog>
    );
};

export default observer(RoundResults);