import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Button from '@material-ui/core/Button';
import styles from '../../style/createPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import DrawerContent from "./DrawerContent";

const CreatePaletteDrawer = ({classes, open, colors, handleDrawerOpen, handleDrawerClose, history, color, setColor, colorName, setColorName, saveColor, addRandomColor, clearPalette, setOpenPaletteNameDialog}) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarTitle}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <LibraryAdd/>
            </IconButton>
            <Typography variant="h6" color="textPrimary" noWrap>
              Create <span className={classes.headerTitleExtendedTxt}>A Palette</span>
            </Typography>
          </div>
          <div>
            <Button variant="contained" color="secondary" className={classes.backBtn} onClick={() => history.goBack()}>Go Back</Button>
            <Button variant="contained" color="primary" onClick={() => setOpenPaletteNameDialog(true)}>Save</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerContent
          handleDrawerClose={handleDrawerClose}
          color={color}
          colors={colors}
          setColor={setColor}
          colorName={colorName}
          setColorName={setColorName}
          saveColor={saveColor}
          addRandomColor={addRandomColor}
          clearPalette={clearPalette}
        />
      </Drawer>
    </React.Fragment>
  );
};

export default withStyles(styles, {withTheme: true})(CreatePaletteDrawer);