import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.body.primary,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    maxWidth: '1140px',
  },
  heading: {
    color: theme.headingColor.green,
    fontWeight: 'bold',
  },
  subHeading: {
    fontWeight: '300',
  },
  icon: {
    paddingRight: '5px',
    fontSize: 'inherit',
  },
}));

function Heading() {
  const [heading, setHeading] = useState([]);
  const theme = useTheme();
  const classes = useStyles(theme);


  const getHeading = () => {
    fetch('http://localhost:5000/api/heading')
      .then((resp) => resp.json())
      .then((data) => {
        const singleHeading = data.map((headingObj) => (
          <Grid container className={classes.root}>
            <Grid container item xs={8}>
              <Grid container item xs={12}>
                <Typography variant="h3" className={classes.heading}>{headingObj.title}</Typography>
              </Grid>
              <Grid container item xs={12}>
                <Typography variant="h6" className={classes.subHeading}>{headingObj.content.body}</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={4}>
              {headingObj.links.map((link, i) => {
                if (i === 0) {
                  return (
                    <Grid container item xs={12}>
                      <PhoneIcon className={classes.icon} />
                      <Typography variant="caption">{link}</Typography>
                    </Grid>
                  );
                }
                if (i === 1) {
                  return (
                    <Grid container item xs={12}>
                      <EmailIcon className={classes.icon} />
                      <Typography variant="caption">{link}</Typography>
                    </Grid>
                  );
                }
                if (i === 2) {
                  return (
                    <Grid container item xs={12}>
                      <LinkedInIcon className={classes.icon} />
                      <Typography variant="caption">{link}</Typography>
                    </Grid>
                  );
                }
                if (i === 3) {
                  return (
                    <Grid container item xs={12}>
                      <GitHubIcon className={classes.icon} />
                      <Typography variant="caption">{link}</Typography>
                    </Grid>
                  );
                }
                if (i === 4) {
                  return (
                    <Grid container item xs={12}>
                      <LocationOnIcon className={classes.icon} />
                      <Typography variant="caption">{link}</Typography>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        ));
        setHeading(singleHeading);
      });
  };

  useEffect(() => {
    getHeading();
  }, []);


  return (
    <>
      {heading}
    </>
  );
}

export default Heading;
