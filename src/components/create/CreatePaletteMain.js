import React from 'react';
import styles from '../../style/createPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import CreatePaletteDrawer from "./CreatePaletteDrawer";
import CreatePaletteContent from "./CreatePaletteContent";

const CreatePaletteMain = ({classes}) => {

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CreatePaletteDrawer open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
      <CreatePaletteContent open={open}/>
    </div>
  );
};

export default withStyles(styles, {withTheme: true})(CreatePaletteMain);