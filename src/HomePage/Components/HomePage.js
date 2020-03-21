import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import styles from '../Styles/styles ';

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container className={classes.mainComtainer} maxWidth='lg'>
          {/* <Box className={classes.searchBarWrapper}></Box> */}
          <Grid container justify='center' alignItems='center' spacing={3}>
            <Grid item xs={12}>
              suman
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(HomePage);
