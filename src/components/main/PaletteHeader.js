import React, { useContext } from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import ColorsContext from '../../context/colors-context';
import 'rc-slider/assets/index.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const PaletteHeader = ({classes, history, showSlider}) => {

  const {state, dispatch} = useContext(ColorsContext);

  const handleChange = (value) => {
    dispatch({type: 'UPDATE_COLOR_FORMAT', colorFormat: value});
    dispatch({type: 'UPDATE_SHOW_ALERT', showAlert: !state.showAlert});
    dispatch({type: 'UPDATE_ALERT_MESSAGE', alertMessage: `Format changed to ${value.toUpperCase()}`});
  };

  return (
    <div className={classes.header}>
      <div className={classes.headerAndLevel}>
        <div className={classes.headerTitle} onClick={() => history.push('/')}>
          <div className={classes.fullName}>ReactColorPicker</div>
          <div className={classes.shortName}>RCP</div>
        </div>
        {showSlider && <div className={classes.sliderContainer}>
          <div className={classes.levelText}>Level : {state.sliderValue} </div>
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
              marginLeft: -1,
              marginTop: -4,
              backgroundColor: 'green',
            }}
            railStyle={{ backgroundColor: '#e9e9e9', height: 8 }}
          />
        </div>}
      </div>
      <Select
        value={state.colorFormat || 'hex'}
        onChange={(e) => handleChange(e.target.value)}
        className={classes.select}
      >
        <MenuItem value={'hex'}>HEX</MenuItem>
        <MenuItem value={'rgb'}>RGB</MenuItem>
        <MenuItem value={'rgba'}>RGBA</MenuItem>
      </Select>
    </div>
  );
};

export default withStyles(styles)(PaletteHeader);
