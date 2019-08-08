let drawerWidth = 360;
const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#e9e9e9'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  toolbarTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleExtendedTxt: {
    '@media (max-Width: 768px)' : {
      display: "none"
    }
  },
  backBtn: {
    marginRight: "1rem"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerContentHeaderBtn: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 1.5rem",
    maxHeight: "68px"
  },
  drawerContentColorPickerContainer: {
    display: "flex",
    justifyContent: "center"
  },
  drawerContentColorPicker: {
    width: "320px !important"
  },
  drawerContentAddColorForm: {
    padding: "0 20px"
  },
  drawerContentTextField: {
    width: "100%"
  },
  drawerContentAddColorBtn: {
    width: "100%",
    fontSize: "24px",
    color: "white",
    fontWeight: "bold",
    margin: "5px 0",
    height: "60px"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  dragDropContainer: {
    width: "100vw",
    '@media (min-width:0px) and (orientation: landscape)': {
      height: "calc(100vh - 48px)"
    },
    '@media (min-width:600px)': {
      height: "calc(100vh - 64px)"
    },
    height: "calc(100vh - 56px)"
  },
  dragDropContainerShift: {
    width: `calc(100vw - ${drawerWidth}px)`
  },
  dragDropList: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    height: "100%",
    width: "100%",
    overflowY: "auto",
    '@media (max-Width: 1200px)' : {
      gridTemplateColumns: "repeat(4, 1fr)"
    },
    '@media (max-Width: 992px)' : {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    '@media (max-Width: 576px)' : {
      gridTemplateColumns: "repeat(1, 1fr)"
    }
  },
  dragAndDropElm: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    textTransform: "uppercase",
    cursor: "pointer"
  },
  dragAndDropElmName: {
    padding: "0 0 8px 8px"
  },
  dragAndDropElmBtn: {
    '&:hover': {
      color: "white"
    }
  }
});

export default styles;