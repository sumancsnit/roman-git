import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
  Avatar,
  Box,
  Divider,
  CircularProgress
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/styles ';

// import PropTypes from 'prop-types';

// Other Components

// import fetchTrainerCount from '../Services';

const Cards = (props) => {
  const { classes, srcAvatar, userName, score } = props;

  const [allTrainer, setAllTrainer] = useState('');
  // const [trainerByTraining, setTrainerByTraining] = useState('');
  // const [loaded, setLoaded] = useState(false);

  // const signal = axios.CancelToken.source();

  // const serviceCall = async () => {
  //   try {
  //     const data = await fetchTrainerCount(signal.token);
  //     setAllTrainer(data[ALL_TRAINER_COUNT]);
  //     setTrainerByTraining(data[TRAINER_BY_TRAINING]);
  //     setLoaded(true);
  //   } catch (error) {
  //     if (!axios.isCancel(error)) Notify(`${error.message}`, 'error');
  //     setLoaded(true);
  //   }
  // };

  useEffect(() => {
    // serviceCall();
    // document.title = `Trainer`;
    // return () => signal.cancel('Request has been canceled');
  }, []);

  return (
    <>
      <Card className={classes.cardSection}>
        <CardActionArea onClick={() => alert('oh dog')}>
          {/* <CardMedia
            className={classes.media}
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          /> */}
          <Box className={classes.avatarWrapper}>
            <Avatar
              color='primary'
              alt='Git Avatar'
              src={srcAvatar}
              className={classes.cardAvatar}
            >
              {!srcAvatar && <CircularProgress size={24} />}
            </Avatar>
          </Box>
          <CardContent>
            <Typography
              className={classes.usernameText}
              gutterBottom
              variant='h5'
              component='h2'
            >
              {userName}
            </Typography>
            <Divider />
            <Box className={classes.scoreWrapper}>
              <Typography variant='h6' color='textSecondary' component='p'>
                Score
              </Typography>
              <Typography variant='h6' color='textSecondary' component='p'>
                {score ? score : <CircularProgress size={16} />}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default withStyles(styles)(Cards);
