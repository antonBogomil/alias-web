import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import IconBack from '@material-ui/icons/KeyboardArrowLeft'
import IconNext from '@material-ui/icons/KeyboardArrowRight'
import useTranslations from "../services/translations";
import {makeStyles} from "@material-ui/core/styles";
const styles : any = {
    root: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
        display: 'flex',
        height: 'auto',
        justifyContent: 'space-between'
    }
}
const useStyles = makeStyles(styles);

const Footer = (props) => {
    const {navigation, history, children} = props;
    const classes = useStyles();
    const t = useTranslations();
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            {
                navigation && navigation.back &&
                <BottomNavigationAction label={t.BACK} icon={<IconBack/>} onClick={() => {
                    history.push(navigation.back)
                }}/>
            }
            {children}
            {
                navigation && navigation.next &&
                <BottomNavigationAction label={t.NEXT} icon={<IconNext/>} onClick={() => {
                    history.push(navigation.next)
                }}/>
            }

        </BottomNavigation>
    );
};
export default Footer