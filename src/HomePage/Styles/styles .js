const styles = {
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  formError: {
    color: '#f44336'
  },
  formWrapper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px'
  },
  inputForm: {
    flex: 1,
    marginBottom: '8px',
    marginTop: '8px'
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
    height: 'calc(100vh - 200px)',
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
  loaderSection: {
    display: 'flex',
    justifyContent: 'center'
  },
  noDataSection: {
    fontSize: '1rem',
    textAlign: 'center',
    paddingTop: '2rem',
    fontWeight: 500
  },
  sortButtonSection: {
    display: 'flex',
    justifyContent: 'flex-end'
  },

  buttonWithIcon: {
    marginRight: '1rem'
  },

  buttonIcon: {
    paddingLeft: '4px'
  },

  listWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  dialogWrapper: {
    width: '400px',
    minHeight: '300px'
  },
  popupLoader: {
    margin: '2rem'
  },
  listHeader: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
  // media-query

  '@media (max-width: 600px)': {
    cardsWrapper: {
      flexBasis: 'auto'
    },
    dialogWrapper: {
      minwidth: '200px',
      minHeight: '200px'
    }
  }
};

export default styles;
