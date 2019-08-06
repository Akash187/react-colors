import React from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/core/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const PaletteColors = ({classes, colors, paletteId, history, copyColor, colorFormat}) => {

  const moreColor = (e, id) => {
    e.stopPropagation();
    history.push(`/palette/${paletteId}/${id}`);
  };

  return (
    <div>
      <div className={classes.paletteColors}>
        {colors.map(
          (color) =>
            <CopyToClipboard text={color[colorFormat]} key={color.name}>
              <div className={classes.colorContainer} onClick={() => copyColor(color[colorFormat])}>
                <div className={classes.centerBtn}>
                  <div className={`${classes.paletteBtnTextStyle} ${classes.copyText}`}>copy</div>
                </div>
                <div
                  className={classes.color}
                  style={{backgroundColor: color.hex}}
                >
                  <div className={classes.paletteColorInfo}>
                    <div className={classes.colorName}>{color.name}</div>
                    <div className={`${classes.paletteBtnTextStyle} ${classes.moreText}`} onClick={(e) => moreColor(e, color.id)}>More</div>
                  </div>
                </div>
              </div>
            </CopyToClipboard>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteColors);
