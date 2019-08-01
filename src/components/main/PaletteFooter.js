import React from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/styles';

const PaletteFooter = ({classes}) => {
  return (
    <div className={`${classes.headerFooter} ${classes.footer}`}>
      <div>Flat UI Colors Spanish</div>
      <div className={classes.footerEmoji}>US</div>
    </div>
  );
};

export default withStyles(styles)(PaletteFooter);
