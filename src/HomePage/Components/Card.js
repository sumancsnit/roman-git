import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Avatar,
  Box,
  Divider,
  CircularProgress
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/styles ';

const Cards = (props) => {
  const { classes, srcAvatar, userName, score, handlePopup } = props;

  return (
    <>
      <Card className={classes.cardSection}>
        <CardActionArea onClick={() => handlePopup(userName)}>
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
                {score}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

Cards.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  srcAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handlePopup: PropTypes.func.isRequired
};

export default withStyles(styles)(Cards);
