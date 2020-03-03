import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme(
    {
        "palette": {
            "common": {"black": "#000", "white": "#fff"},
            "background": {"paper": "#fff", "default": "#fafafa"},
            "primary": {
                "light": "rgba(192, 103, 239, 1)",
                "main": "rgba(177, 66, 236, 1)",
                "dark": "rgba(123, 46, 165, 1)",
                "contrastText": "#fff"
            },
            "secondary": {
                "light": "rgba(255, 110, 177, 1)",
                "main": "rgba(255, 74, 158, 1)",
                "dark": "rgba(178, 51, 110, 1)",
                "contrastText": "rgba(255, 255, 255, 1)"
            },
            "error": {"light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff"},
            "text": {
                "primary": "rgba(109, 124, 144, 1)",
                "secondary": "rgba(32, 41, 47, 1)",
                "disabled": "rgba(0, 0, 0, 0.38)",
                "hint": "rgba(0, 0, 0, 0.38)"
            }
        }
    }
);
export default theme;