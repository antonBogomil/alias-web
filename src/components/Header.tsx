import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Typography, IconButton, Toolbar, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuContainer from "../containers/Menu";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {},
    logo: {},
    menuButton: {},
    toolbar: {
        justifyContent: 'space-between',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const Header = (props) => {
    const cl = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <AppBar className={cl.appBar} position="static">
                <Toolbar variant="dense" className={cl.toolbar}>
                    <div className={cl.logo}>
                        <Typography variant="h6" component="h6">Alias WEb</Typography>
                    </div>
                    <IconButton edge="start" className={cl.menuButton} onClick={handleDrawerOpen} color="inherit"
                                aria-label="menu">
                        <MenuIcon fontSize={"large"}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={cl.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: cl.drawerPaper,
                }}
            >
                <div className={cl.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <MenuContainer/>
            </Drawer>
        </>
    );
};
export default Header;
