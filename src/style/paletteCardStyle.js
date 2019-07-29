export default {
  paletteCard: {
    height: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "8px",
    border: "solid black 1px",
    position: "relative",
    cursor: "pointer",
    '&:hover $icon': {
      opacity: 1
    }
  },
  colors: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 40px)"
  },
  cardInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
    fontSize: "20px",
    fontWeight: "700"
  },
  icon: {
    position: "absolute",
    right: "0",
    top: "0",
    color: "white",
    padding: "8px",
    borderTopRightRadius: "5px",
    backgroundColor: "red",
    opacity: 0,
    transition: "opacity 1s"
  }
};