import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Grid,
  Paper,
  IconButton,
  Divider,
  TextField,
  CircularProgress,
  Snackbar,
  Collapse,
  Button
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from '../Styles/styles ';
import { fetchGitProfiles } from '../services';
import trimStart from 'lodash/trimStart';
import trim from 'lodash/trim';
// others component
import Card from './Card';
import DetailsPopup from './DetailsPopup';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      formInput: '',
      loader: false,
      formError: '',
      noDataCell: false,
      notify: false,
      notifyTheme: 'success',
      sortAssending: false,
      popup: {}
    };
  }

  componentDidMount() {
    document.title = 'unacademy test';
  }

  handleSubmit = () => {
    let { formInput } = this.state;
    formInput = trim(formInput);
    if (!formInput) {
      this.setState({ formError: 'required field', cardData: [] });
    } else {
      this.getGitProfiles(formInput);
    }
  };

  getGitProfiles = async (formInput) => {
    this.setState({ cardData: [], noDataCell: false, loader: true });
    try {
      const cardData = await fetchGitProfiles(formInput);

      if (!cardData.total_count) {
        this.setState({
          noDataCell: true,
          notify: true,
          notifyTheme: 'warning'
        });
      } else {
        const profileDetails = cardData.items.map((profile) => ({
          ...profile,
          score: Math.round(profile.score)
        }));
        this.setState({
          cardData: profileDetails,
          loader: false,
          notify: true,
          notifyTheme: 'success'
        });
      }
    } catch (error) {
      this.setState({ noDataCell: true, notify: true, notifyTheme: 'error' });
    }
    this.setState({ loader: false });
  };

  handleChangeForm = (event) => {
    let { value } = event.target;
    value = trimStart(value);
    this.setState((prevState) => {
      let { formError, formInput } = prevState;
      formInput = value;
      formError = '';
      return { formInput, formError, noDataCell: false };
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSubmit();
    }
  };

  handleSort = () => {
    this.setState(
      (prevState) => ({
        sortAssending: !prevState.sortAssending
      }),
      this.sortCard()
    );
  };

  sortCard = () => {
    const { sortAssending } = this.state;
    let { cardData } = this.state;
    if (sortAssending) cardData = cardData.sort((a, b) => a.score - b.score);
    if (!sortAssending) cardData = cardData.sort((a, b) => b.score - a.score);
    this.setState({ cardData });
  };

  handleCloseNotify = () => {
    this.setState({ notify: false });
  };

  handlePopupOpen = (userName) => {
    this.setState({ popup: { userName, open: true } });
  };

  handleClosePopup = () => {
    this.setState(({ popup }) => ({ popup: { ...popup, open: false } }));
  };

  render() {
    const { classes } = this.props;
    const {
      cardData,
      formInput,
      formError,
      loader,
      noDataCell,
      notify,
      notifyTheme,
      sortAssending,
      popup
    } = this.state;
    return (
      <>
        <Container className={classes.mainComtainer} maxWidth='lg'>
          <Box className={classes.formSection}>
            <Paper component='form' className={classes.formWrapper}>
              <IconButton
                disabled
                className={classes.iconButton}
                aria-label='menu'
              >
                <GitHubIcon color='primary' />
              </IconButton>
              <TextField
                placeholder='Search github'
                error={!!formError}
                value={formInput}
                name='searchInput'
                onChange={this.handleChangeForm}
                onKeyPress={this.handleKeyPress}
                className={classes.inputForm}
              />
              <IconButton
                className={classes.iconButton}
                aria-label='search'
                onClick={this.handleSubmit}
              >
                <SearchIcon />
              </IconButton>
            </Paper>

            <Box className={classes.formError} component='span'>
              {formError}
            </Box>
          </Box>

          <Box className={classes.sortButtonSection}>
            <Button
              onClick={this.handleSort}
              className={classes.buttonWithIcon}
              disabled={!cardData.length}
              variant='outlined'
            >
              Sort By Score
              {sortAssending ? (
                <ArrowUpwardIcon
                  className={classes.buttonIcon}
                  color={cardData.length ? 'secondary' : 'inherit'}
                />
              ) : (
                <ArrowDownwardIcon
                  className={classes.buttonIcon}
                  color={cardData.length ? 'secondary' : 'inherit'}
                />
              )}
            </Button>
          </Box>

          <Divider className={classes.divider} />
          <Box className={classes.cardsBoxWrapper}>
            <Grid container justify='center' alignItems='center' spacing={1}>
              {loader && (
                <Grid className={classes.loaderSection} item xs={12}>
                  <CircularProgress />
                </Grid>
              )}

              {noDataCell && !cardData?.length && (
                <Grid className={classes.noDataSection} item xs={12}>
                  No Data
                </Grid>
              )}

              {cardData.map((profile, idx) => (
                <Grid
                  className={classes.cardsWrapper}
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  key={`${profile.login + idx}`}
                >
                  <Card
                    srcAvatar={profile.avatar_url}
                    userName={profile.login}
                    score={profile.score}
                    handlePopup={() => this.handlePopupOpen(profile.login)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        {notify && (
          <Snackbar
            open
            autoHideDuration={2000}
            onClose={this.handleCloseNotify}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            TransitionComponent={Collapse}
          >
            <Alert onClose={this.handleCloseNotify} severity={notifyTheme}>
              {notifyTheme === 'success' &&
                'Successfully fetched Profile details'}
              {notifyTheme === 'warning' && 'No data found, Please try again'}
              {notifyTheme === 'error' && 'Bad Request'}
            </Alert>
          </Snackbar>
        )}
        {popup.open && (
          <DetailsPopup
            userName={popup.userName}
            open
            onClose={this.handleClosePopup}
          />
        )}
      </>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
};

export default withStyles(styles)(HomePage);
