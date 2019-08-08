import React from 'react';
import clsx from 'clsx';
import styles from '../../style/createPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import DragAndDropColors from "./DragAndDropColors";

const CreatePaletteContent = ({classes, open, colors, setColors}) => {

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <div className={clsx(classes.dragDropContainer, {
        [classes.dragDropContainerShift]: open
      })}>
        <DragAndDropColors colors={colors} setColors={setColors}/>
      </div>
    </main>
  );
};

export default withStyles(styles, {withTheme: true})(CreatePaletteContent);