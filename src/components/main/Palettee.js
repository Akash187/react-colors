import React, {useContext, useEffect, useState} from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from "./PaletteFooter";
import PaletteHeader from "./PaletteHeader";
import ColorsContext from '../../context/colors-context';
import PaletteColors from "./PaletteColors";
import {generatePalette} from "../../colorHelpers";

const Palette = ({classes, history, match}) => {

  const { state } = useContext(ColorsContext);
  const [palette, setPalette] = useState({});

  useEffect(() => {
    if(state.colors){
      let tempPalette = state.colors.find(color => color.id === match.params.id);
      setPalette(generatePalette(tempPalette));
    }
  }, [state]);

  return (
    <div className={classes.palette}>
      <PaletteHeader history={history} showSlider={true}/>
      <PaletteColors
        colors={palette.colors ? palette.colors[state.sliderValue] : []}
        paletteId={match.params.id}
        history={history}
      />
      <PaletteFooter name={palette.paletteName || ''} emoji={palette.emoji || ''}/>
    </div>
  );
};

export default withStyles(styles)(Palette);
