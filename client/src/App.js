import React from 'react';
import './App.css';
import {
  createMuiTheme, ThemeProvider, responsiveFontSizes, makeStyles,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Experience from './components/Experience';
import Heading from './components/Heading';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Summary from './components/Summary';
import Projects from './components/Projects';

let theme = createMuiTheme({
  headingColor: {
    green: '#54B689',
  },
  body: {
    primary: '#4f4f4f',
    secondary: '#767676',
  },
  mainTitle: {
    color: '#292929',
    fontWeight: 'bold',
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    fontFamily: '"Roboto" , "Helvetica Neue", sans-serif',
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.wrapper}>
        <Heading />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
