import React, { useContext } from 'react';
import styles from '../../style/paletteListStyle';
import { withStyles } from '@material-ui/styles';
import PaletteCard from "./PaletteCard";
import ColorsContext from '../../context/colors-context';

const PaletteList = ({classes}) => {

  const {state} = useContext(ColorsContext);

  return (
    <div className={classes.paletteList}>
      {state.colors && state.colors.map(seedColor =>
        <PaletteCard key={seedColor.id}
        paletteName={seedColor.paletteName}
        id={seedColor.id}
        emoji={seedColor.emoji}
        paletteColors={seedColor.colors}/>
      )}
    </div>
  );
};

export default withStyles(styles)(PaletteList);
