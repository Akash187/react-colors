import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import styles from '../../style/createPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const DrawerContent = ({classes, colors, handleDrawerClose, color, setColor, colorName, setColorName, saveColor, addRandomColor, clearPalette}) => {

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <React.Fragment>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {<ChevronLeftIcon />}
        </IconButton>
      </div>
      <Typography variant="h4" color="textPrimary" align="center">
        Design Your Palette
      </Typography>
      <div className={classes.drawerContentHeaderBtn}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.backBtn}
          onClick={clearPalette}>
          Clear Palette
        </Button>
        <Button
          disabled={colors.length === 20}
          variant="contained"
          onClick={addRandomColor}
          color="primary">
          Random Color
        </Button>
      </div>
      <div className={classes.drawerContentColorPickerContainer}>
        <ChromePicker
          color={color}
          className={classes.drawerContentColorPicker}
          onChangeComplete={handleChangeComplete}/>
      </div>
      <ValidatorForm
        className={classes.drawerContentAddColorForm}
        onSubmit={saveColor}
        onError={errors => console.log(errors)}
      >
        <TextValidator
          className={classes.drawerContentTextField}
          placeholder={"Color Name"}
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
          margin="normal"
          variant="filled"
          validators={['required', 'isColorNameUnique']}
          errorMessages={['this field is required', 'name must be unique.']}
        />
        <Button
          type="submit"
          disabled={colors.length === 20}
          style={{backgroundColor: `${colors.length === 20 ? 'grey' : color}`}}
          className={classes.drawerContentAddColorBtn}>
          Add Color
        </Button>
      </ValidatorForm>
    </React.Fragment>
  );
};

export default withStyles(styles)(DrawerContent);