import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg" fixed>
                <Typography component="div" style={{backgroundColor: '#512156', height: '100%'}}/>
            </Container>
        </React.Fragment>
    );
}