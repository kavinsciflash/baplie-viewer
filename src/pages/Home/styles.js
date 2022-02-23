import backgroundImage from '../../assets/images/Skin.svg';

export default {
  vesselName: {
    flex: 1,
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: '600',
    color: 'white',
    paddingRight: '68px',
  },
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
  content: {
    height: '100vh',
    flexDirection: 'column',
    display: 'flex',
  },
  navigationBar: {
    padding: '10px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: 'solid thin turquoise',
    backgroundColor:'#a5a5a5'
  },
  filterBar: {
    userSelect: 'none',
    height: '80px',
    borderBottom: 'solid thin turquoise',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '15px 30px',
  },
  formControlStyle: {
    marginLeft: '20px',
  },
  footerLogo: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    userSelect: 'none',
    textAlign: 'right',
  },
  buildVersion: {
    margin: '10px 0',
    color: '#6B7280',
  },
  uploadFileContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  uploadFile: {
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    margin: '0 10px',
    opacity: '0.5',
  },
  enabledUploadFile: {
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    margin: '0 10px',

    ':hover': {
      opacity: 0.5,
    },
  },
  logoImage: { maxHeight: '60px' },
  boxContainer: {},
  boxItem: {
    borderBottom: 'solid thin turquoise',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-evenly',
    padding: '20px 35px',
  },
  fileRemove: {
    position: 'absolute',
    top: '8px',
    right: '28px',
    ':hover': {
      color: '#CD3D3A',
      cursor: 'pointer',
    },
  },
  compact: {
    padding: '10px 35px',
    cursor: 'pointer',
    ':hover': {
      background: 'teal',
    },
  },
  fileItem: {
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    paddingLeft: '8px',
    letterSpacing: 0,
    ':hover': {
      background: 'teal',
    },
  },
  fileList: {
    maxHeight: '250px',
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)',
      backgroundColor: 'rgba(64,224,208,0.3)',
    },
  },
  canvasContainer: {
    flex: 1,
    width: '100%',
    height: '100px',
    overflowY: 'auto',
    willChange: 'transform',
    paddingTop: '20px',
    overflowX: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)',
      backgroundColor: 'rgba(64,224,208,0.3)',
    },
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  loader: {
    textAlign: 'center',
  },
  logoutButton: {
    marginLeft: '10px',
    cursor: 'pointer',
  },
  disabled: {
    opacity: '0.4',
  },
  clearFiltersButton: {
    display: 'flex',
    height: '40px',
    alignItems: 'center',
    padding: '0px 12px',
    borderRadius: '8px',
    color: '#00FFDD',
    borderColor: '#00FFDD',
    fontWeight: '400',
  },
  formControl: {
    height: '40px',
    border: 'solid thin #00E6FF',
    borderRadius: '8px',
    userSelect: 'none',
  },
  labelContainer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    padding: '0 12px',
    borderRadius: '8px',
    justifyContent: 'space-between',
    ':hover': {
      backgroundColor: 'teal',
    },
  },
  toggle: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  hide: {
    display: 'none'
  },
  icon: {
		height: '36px',
    width: '36px',
		cursor: 'pointer',
    margin: '0 10px'
	},
  svgWhite:{
    filter: 'invert(0%) sepia(4%) saturate(15%) hue-rotate(61deg) brightness(96%) contrast(100%)'
  }
};
