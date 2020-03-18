import React from 'react';
import Header from "./components/ui/header";
import './index.css'
import './App.css';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

function App() {
    return (
        <div className="App">
            <Header/>
            <CssBaseline/>
            <Container maxWidth="lg" fixed>
                <Typography component="div" style={{backgroundColor: '#512156', height: '100vh'}}>
                    <Typography variant="h1"> Home </Typography>
                </Typography>
            </Container>
        </div>
    );
}

export default App;