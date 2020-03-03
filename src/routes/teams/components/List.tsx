import {Avatar, Fab, List, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import {SortableContainer, SortableElement} from "react-sortable-hoc";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {deepOrange} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        marginRight: theme.spacing(2)
    }
}));
const TeamItem = SortableElement(({item, handleDelete}) => {
    const cl = useStyles();
    return (
        <ListItem>
            <Avatar variant="rounded" className={cl.square}>
                CT
            </Avatar>
            <ListItemText>{item.name}</ListItemText>
            <div>
                <Fab onClick={() => {
                    handleDelete(item);
                }} aria-label="delete">

                    <DeleteIcon fontSize='small'/>
                </Fab>
            </div>
        </ListItem>
    )
});
export const TeamsList = SortableContainer(({items, handleDelete}) => {
    return (
        <List>
            {
                items.map((item: any, i: number) => (
                    <TeamItem
                        index={i}
                        key={i}
                        item={item}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </List>
    )
});