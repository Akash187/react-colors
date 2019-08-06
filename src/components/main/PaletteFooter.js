import React from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/core/styles';

const PaletteFooter = ({classes, name, emoji}) => {
  return (
    <div className={classes.footer}>
      <div>{name}</div>
      <div className={classes.footerEmoji}>{emoji}</div>
    </div>
  );
};

export default withStyles(styles)(PaletteFooter);
