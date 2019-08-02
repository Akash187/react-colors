import React, { useContext } from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import ColorsContext from '../../context/colors-context';
import 'rc-slider/assets/index.css';

const PaletteHeader = ({classes}) => {

  const {state, dispatch} = useContext(ColorsContext);

  return (
    <div className={`${classes.headerFooter} ${classes.header}`}>
      <div className={classes.headerAndLevel}>
        <div className={classes.headerTitle}>ReactColorPicker</div>
        <div className={classes.sliderContainer}>
          <div>Level : {state.sliderValue} </div>
          <Slider
            className={classes.slider}
            step={100}
            defaultValue={500}
            value={state.sliderValue}
            min={100}
            max={900}
            onChange={(value) => dispatch({type: 'UPDATE_SLIDER_VALUE', value})}
            trackStyle={{ backgroundColor: '#e9e9e9', height: 8 }}
            handleStyle={{
              borderColor: 'green',
              height: 16,
              width: 16,
              marginLeft: -14,
              marginTop: -4,
              backgroundColor: 'green',
            }}
            railStyle={{ backgroundColor: '#e9e9e9', height: 8 }}
          />
        </div>
      </div>
      <div>Dropdown</div>
    </div>
  );
};

export default withStyles(styles)(PaletteHeader);
