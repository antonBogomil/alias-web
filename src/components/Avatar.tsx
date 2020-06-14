import React from 'react';
import {Avatar, makeStyles} from "@material-ui/core";

const useStyles = makeStyles<any, any>(theme => ({
    square: (props) => {
        return {
            color: '#fff',
            backgroundColor: props.color,
            marginRight: theme.spacing(2)
        }
    }
}));
const TeamAvatar = ({color, name}) => {
    const cl = useStyles({color});
    return (
        <div>
            <Avatar variant="rounded" className={cl.square}>
                {name.slice(0, 2)}
            </Avatar>
        </div>
    );
};

export default TeamAvatar;
