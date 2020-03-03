import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    appBar: {
        padding: 20
    },
    logo: {

    }
}));
const Header = () => {
    const cl = useStyles();
    return (
        <AppBar className={cl.appBar} position="static">
            <div className={cl.logo}>
                <Typography variant="h6" component="h6">Alias UA</Typography>
            </div>
        </AppBar>
    );
};
export default Header;