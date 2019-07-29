import bgImg from './bg.svg';

export default {
  root: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    height: "100vh",
    overflowY: "auto"
  },
  container: {
    padding: "3% 10%"
  },
  header:{
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold"
  },
  button: {
    color: "white",
    textTransform: "capitalize"
  }
};