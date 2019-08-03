export default {
  palette: {
    width: "100vw",
    height: "100vh"
  },
  header:{
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    '@media (max-Width: 768px)' : {
      height: "7vh"
    }
  },
  headerAndLevel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 15px",
    backgroundColor: "#eceff1",
    fontSize: "20px",
    fontWeight: "500",
    cursor: "pointer"
  },
  fullName: {
    display: "block",
    '@media (max-Width: 992px)' : {
      display: "none"
    }
  },
  shortName: {
    display: "none",
    '@media (max-Width: 992px)' : {
      display: "block"
    }
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100%",
    paddingLeft: "10px",
    '@media (max-Width: 576px)' : {
      flexDirection: "column",
      alignItems: "flex-start"
    }
  },
  levelText: {
    paddingRight: "10px",
  },
  slider: {
    width: "300px",
    margin: "0 25px",
    '@media (max-Width: 992px)' : {
      width: "240px",
      margin: "0 10px"
    },
    '@media (max-Width: 768px)' : {
      margin: "0"
    },
    '@media (max-Width: 576px)' : {
      width: "200px"
    }
  },
  select: {
    marginRight: "15px",
    '@media (max-Width: 576px)' : {
      marginRight: "5px"
    }
  },
  paletteColors: {
    height: "90vh",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    '@media (max-Width: 1200px)' : {
      gridTemplateColumns: "repeat(4, 1fr)"
    },
    '@media (max-Width: 992px)' : {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    '@media (max-Width: 576px)' : {
      gridTemplateColumns: "repeat(1, 1fr)"
    },
    '@media (max-Width: 768px)' : {
      height: "88vh",
      overflow: "auto"
    }
  },
  colorContainer:{
    position: "relative",
    '&:hover $copyText': {
      opacity: 1
    }
  },
  paletteBtnTextStyle: {
    textTransform: "uppercase",
    fontSize: "16px",
    color: "white",
    cursor: "pointer"
  },
  centerBtn: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyText: {
    background: "rgba(0, 0, 0, 0.1)",
    padding: "5px 20px",
    opacity: 0
  },
  backText: {
    background: "rgba(255, 255, 255, 0.3)",
    padding: "5px 20px"
  },
  color: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end"
  },
  paletteColorInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  colorName: {
    padding: "8px",
    textTransform: "uppercase",
    fontSize: "14px"
  },
  moreText: {
    padding: "8px",
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: "10"
  },
  footer: {
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "700",
    width: "100%"
  },
  footerEmoji: {
    padding: "0 15px",
    fontSize: "20px"
  }
}