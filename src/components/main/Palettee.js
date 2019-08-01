import React from 'react';
import styles from '../../style/paletteCardStyle';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from "./PaletteFooter";
import PaletteHeader from "./PaletteHeader";

const Palette = ({classes}) => {
  return (
    <div>
      <PaletteHeader/>
      <PaletteFooter/>
    </div>
  );
};

export default withStyles(styles)(Palette);
