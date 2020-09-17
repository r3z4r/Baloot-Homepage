import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

function RTL(props) {
    return (
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    );
}


const theme = createMuiTheme({
    direction: "rtl"
});

function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <div dir={'rtl'}>
                <RTL>
                    <Container maxWidth="sm">
                        <Box my={4}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Next.js example
                            </Typography>
                            <Button variant="contained" color="primary" naked href="/">
                                Go to the main page
                            </Button>
                        </Box>
                    </Container>
                </RTL>
            </div>
        </ThemeProvider>
    )
}

export default Layout;