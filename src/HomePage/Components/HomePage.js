import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Divider
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from '../Styles/styles ';
import Card from './Card';
import { fetchGitProfiles } from '../services';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      loaded: false
    };
  }

  componentDidMount() {
    this.getGitProfiles();
  }

  getGitProfiles = async () => {
    try {
      const cardData = await fetchGitProfiles('john');
      this.setState({ cardData, loaded: true });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    const { classes } = this.props;
    const { cardData } = this.state;
    console.log('card-data', cardData);
    return (
      <>
        <Container
          component='Paper'
          className={classes.mainComtainer}
          maxWidth='lg'
        >
          <Box className={classes.formSection}>
            {/* <Grid item xs={12}> */}
            <Paper component='form' className={classes.formWrapper}>
              <IconButton
                disabled
                className={classes.iconButton}
                aria-label='menu'
              >
                <GitHubIcon color='primary' />
              </IconButton>
              <InputBase
                className={classes.inputForm}
                placeholder='Search github'
                inputProps={{ 'aria-label': 'Search github' }}
              />
              <IconButton
                type='submit'
                className={classes.iconButton}
                aria-label='search'
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            {/* </Grid> */}
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.cardsBoxWrapper}>
            <Grid
              // className={classes.cardContainer}
              container
              justify='center'
              alignItems='center'
              spacing={1}
            >
              {cardData.map((profile) => (
                <Grid
                  className={classes.cardsWrapper}
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <Card
                    srcAvatar={profile.avatar_url}
                    userName={profile.login}
                    score={profile.score}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(HomePage);
