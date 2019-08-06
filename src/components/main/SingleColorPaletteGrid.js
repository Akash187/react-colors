import React from 'react';
import styles from '../../style/paletteStyle';
import { withStyles } from '@material-ui/core/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const SingleColorPaletteGrid = ({classes, colors, paletteId, history, copyColor, colorFormat}) => {

  return (
    <div className={classes.paletteColors}>
      {colors.map(
        (color) =>
          <CopyToClipboard text={color[colorFormat]} key={color.name}>
          <div key={color.name} className={classes.colorContainer} onClick={() => copyColor(color[colorFormat])}>
            <div className={classes.centerBtn}>
              <div className={`${classes.paletteBtnTextStyle} ${classes.copyText}`}>copy</div>
            </div>
            <div
              className={classes.color}
              style={{backgroundColor: color.hex}}
            >
              <div className={classes.colorName}>{color.name}</div>
            </div>
          </div>
          </CopyToClipboard>
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

export default withStyles(styles)(SingleColorPaletteGrid);
