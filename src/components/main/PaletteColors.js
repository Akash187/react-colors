import React from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/styles';

const PaletteColors = ({classes, colors, paletteId, history}) => {

  const moreColor = (e, id) => {
    e.stopPropagation();
    history.push(`/palette/${paletteId}/${id}`);
  };

  return (
    <div className={classes.paletteColors}>
      {colors.map(
        ({name, hex, id}) =>
          <div key={name} className={classes.colorContainer}>
            <div className={classes.centerBtn}>
              <div className={`${classes.paletteBtnTextStyle} ${classes.copyText}`}>copy</div>
            </div>
            <div
              className={classes.color}
              style={{backgroundColor: hex}}
            >
              <div className={classes.paletteColorInfo}>
                <div className={classes.colorName}>{name}</div>
                <div className={`${classes.paletteBtnTextStyle} ${classes.moreText}`} onClick={(e) => moreColor(e, id)}>More</div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default withStyles(styles)(PaletteColors);
