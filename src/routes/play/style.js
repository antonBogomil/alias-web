import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
		height: '100%'
    },
    top: {
        position: 'relative',
        height: 100
    },
    main: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    btn: {
        fontSize: 100
    },
    word: {
        fontSize: 40
    },
    btnUp: {},
    team: {
        position: 'absolute',
        left: 6,
        fontSize: 14,
        top: 10,
        maxWidth: 200
    },
    points: {
        position: 'absolute',
        right: 6,
        fontSize: 24
    },
    time: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        fontSize: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottom: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0
    }
}));
export default useStyles