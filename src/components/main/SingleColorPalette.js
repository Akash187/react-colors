import React, {useContext, useEffect, useState} from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from "./PaletteFooter";
import PaletteHeader from "./PaletteHeader";
import ColorsContext from '../../context/colors-context';
import SingleColorPaletteGrid from "./SingleColorPaletteGrid";
import {generatePalette} from "../../colorHelpers";
import withCopyBox from './PaletteHOC';

const SingleColorPalette = ({classes, history, match, copyColor}) => {

  const { state } = useContext(ColorsContext);
  const [paletteName, setPaletteName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if(state.colors){
      let palette = state.colors.find(color => color.id === match.params.id1);
      let tempPalette = generatePalette(palette);
      setPaletteName(tempPalette.paletteName);
      setEmoji(tempPalette.emoji);
      let tempColors = [];
      for(let sliderValue in tempPalette.colors){
        if(sliderValue !== '50'){
          tempColors.push(
            tempPalette.colors[sliderValue]
              .find(color => color.id === match.params.id2)
          )
        }
      }
      setColors(tempColors);
    }
  }, [state]);

  return (
    <div className={classes.palette}>
      <PaletteHeader history={history} showSlider={false}/>
      <SingleColorPaletteGrid
        colors={colors || []}
        paletteId = {match.params.id1}
        history={history}
        copyColor={copyColor}
        colorFormat={state.colorFormat}
      />
      <PaletteFooter name={paletteName} emoji={emoji}/>
    </div>
  );
};

export default withStyles(styles)(withCopyBox(SingleColorPalette));
