import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/layout/theme';
import {create} from 'jss';
import rtl from 'jss-rtl';
import AppBar from "../components/layout/AppBar";
import Footer from "../components/layout/Footer";

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

function RTL(props) {
    return (
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    );
}

export default function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);


    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <div dir={'rtl'}>
                    <RTL>
                        <AppBar/>
                        <CssBaseline/>
                        <Component {...pageProps} />
                        <Footer/>
                    </RTL>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};