import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#00c2b5',
        },
        secondary: {
            main: '#61a532',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
            primary: '#006178'
        },
        text: {
            main: '#263238',
            transparent: '#fff'
        },
    },
});

export default theme;