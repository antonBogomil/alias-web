import React from 'react';
import {BottomNavigation, BottomNavigationAction, makeStyles} from '@material-ui/core';
import IconBack from '@material-ui/icons/KeyboardArrowLeft'
import IconNext from '@material-ui/icons/KeyboardArrowRight'
import useTranslations from "../services/translations";

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
        display: 'flex',
        justifyContent: '100%'
    },
});
const Footer = ({navigation, history}) => {
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
                navigation.back && <BottomNavigationAction label={t.BACK} icon={<IconBack/>} onClick={() => {
                    history.push(navigation.back)
                }}/>
            }
            {
                navigation.next && <BottomNavigationAction label={t.NEXT} icon={<IconNext/>} onClick={() => {
                    history.push(navigation.next)
                }}/>
            }
        </BottomNavigation>
    );
};
export default Footer