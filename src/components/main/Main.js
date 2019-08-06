import React from 'react';
import styles from '../../style/mainStyle';
import { withStyles } from '@material-ui/core/styles';
import PaletteList from "./PaletteList";
import Button from '@material-ui/core/Button';

const Main = ({classes, history}) => {

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.title}> React Colors </div>
          <Button color="primary" className={classes.button} onClick={() => history.push('/createPalette')}>
            Create Palette
          </Button>
        </div>
        <PaletteList/>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
