import React from 'react';
import seedColors from '../../seedColors';
import styles from '../../style/paletteListStyle';
import { withStyles } from '@material-ui/styles';
import PaletteCard from "./PaletteCard";

const PaletteList = ({classes}) => {

  return (
    <div className={classes.paletteList}>
      {seedColors.map(seedColor =>
        <PaletteCard key={seedColor.id}
        paletteName={seedColor.paletteName}
        id={seedColor.id}
        emoji={seedColor.emoji}
        colors={seedColor.colors}/>
      )}
    </div>
  );
};

export default withStyles(styles)(PaletteList);
