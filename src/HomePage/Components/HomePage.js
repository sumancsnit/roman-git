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
  Divider,
  TextField,
  InputAdornment
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from '../Styles/styles ';
import Card from './Card';
import { fetchGitProfiles } from '../services';
import trimStart from 'lodash/trimStart';
import trim from 'lodash/trim';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      formInput: '',
      loaded: false,
      formError: 'required field'
    };
  }

  componentDidMount() {
    this.getGitProfiles();
  }

  handleSubmit = () => {
    let { formInput } = this.state;
    formInput = trim(formInput);

    if (formInput) {
      this.setState({ formError: 'required field' });
    }
  };

  // handleSubmit = async () => {
  //   let { formData } = this.state;

  //   formData = {
  //     ...formData,
  //     competencyName: trim(formData.competencyName),
  //     competencyCode: trim(formData.competencyCode),
  //     competencyDesc: trim(formData.competencyDesc)
  //   };

  //   this.setState(({ status }) => ({
  //     status: { ...status, isSubmitted: true }
  //   }));

  getGitProfiles = async () => {
    try {
      const cardData = await fetchGitProfiles('neha');
      this.setState({ cardData, loaded: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChangeForm = (event) => {
    let { value } = event.target;
    value = trimStart(value);
    this.setState((prevState) => {
      let { formError, formInput } = prevState;
      formInput = value;
      if (value) formError = '';
      return { formInput, formError };
    });
  };

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState((prevState) => {
  //     const { formData, formErrors } = prevState;
  //     formData[name] = trimStart(value);
  //     if (value) {
  //       delete formErrors[name];
  //     }
  //     return { formData, formErrors };
  //   });

  //   this.debounceFieldValidation(name);
  // };

  render() {
    const { classes } = this.props;
    const { cardData, formInput, formError } = this.state;
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
              <InputBase
                className={classes.inputForm}
                placeholder='Search github'
                margin='dense'
                input
                value={formInput}
                name='searchInput'
                onChange={this.handleChangeForm}
                inputProps={{
                  'aria-label': 'Search github',
                  error: true,
                  helperText: 'asdf'
                }}
                onSubmit={() => alert('oh dog - 2')}
              />
              <IconButton className={classes.iconButton} aria-label='search'>
                <SearchIcon />
              </IconButton>
            </Paper>
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
              {cardData.map((profile, idx) => (
                <Grid
                  className={classes.cardsWrapper}
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  key={`${profile.score + idx}`}
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
