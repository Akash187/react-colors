import React from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/styles';

const PaletteSingleColor = ({classes, colors, paletteId, history}) => {

  return (
    <div className={classes.paletteColors}>
      {colors.map(
        ({name, hex}) =>
          <div key={name} className={classes.colorContainer}>
            <div className={classes.centerBtn}>
              <div className={`${classes.paletteBtnTextStyle} ${classes.copyText}`}>copy</div>
            </div>
            <div
              className={classes.color}
              style={{backgroundColor: hex}}
            >
              <div className={classes.colorName}>{name}</div>
            </div>
          </div>
      )}
      <div className={classes.colorContainer}>
        <div className={classes.centerBtn}>
          <div className={`${classes.paletteBtnTextStyle} ${classes.backText}`} onClick={() => history.push(`/palette/${paletteId}`)}>Go Back</div>
        </div>
        <div
          className={classes.color}
          style={{backgroundColor: '#000'}}
        >
          random text
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteSingleColor);
