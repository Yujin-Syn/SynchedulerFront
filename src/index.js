import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import { LayoutProvider } from "./Context/LayoutContext";
import { UserProvider } from "./Context/UserContext";

import App from 'Components/App';

ReactDOM.render(
    <LayoutProvider>
        <UserProvider>
            <ThemeProvider theme={Themes.default}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </UserProvider>
    </LayoutProvider>, 
    document.getElementById('root'));
