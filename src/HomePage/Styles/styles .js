const styles = {
  // root: {
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   color: 'white',
  //   height: 48,
  //   padding: '0 30px'
  // },
  mainComtainer: {
    height: '100%',
    padding: '1rem 8px',
    marginTop: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    borderRadius: '4px',
    overflow: 'hidden',
    maxWidth: '1100px',
    marginBottom: '.5rem'
  },
  searchBarWrapper: {
    marginTop: '100px'
  },
  formSection: {
    display: 'flex',
    justifyContent: 'center'
  },
  formWrapper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px'
  },
  inputForm: {
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  cardsWrapper: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  cardsBoxWrapper: {
    height: 'calc(100vh - 135px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingBottom: '2rem',
    marginTop: '1rem'
  },
  cardSection: {
    width: '300px'
  },

  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  cardAvatar: {
    width: '75px',
    height: '75px',
    fontSize: '2.5rem',
    backgroundColor: '#e91e63'
  },
  scoreWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem'
  },
  usernameText: {
    overflowWrap: 'break-word'
  },

  divider: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },

  // media-query

  '@media (max-width: 600px)': {
    cardsWrapper: {
      flexBasis: 'auto'
    }
  }
};

export default styles;
