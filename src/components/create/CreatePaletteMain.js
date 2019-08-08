import React, {useState, useEffect, useContext} from 'react';
import styles from '../../style/createPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import CreatePaletteDrawer from "./CreatePaletteDrawer";
import CreatePaletteContent from "./CreatePaletteContent";
import seedColors from '../../seedColors';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ColorsContext from '../../context/colors-context';
import PaletteNameDialog from "./PaletteNameDialog";
import EmojiDialog from "./EmojiDialog";

const CreatePaletteMain = ({classes, history}) => {

  const { state, dispatch } = useContext(ColorsContext);
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);
  const [color, setColor] = useState('blue');
  const [colorName, setColorName] = useState('');
  const [openPaletteNameDialog, setOpenPaletteNameDialog] = useState(false);
  const [paletteName, setPaletteName] = useState('');
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if(state.colors){
      let allColorsName = state.colors.flatMap(palette => {
        return palette.colors.map(color => color.name.toLowerCase());
      });
      ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
        return !allColorsName.some((name) => name === value.toLowerCase().trim());
      });
    }
  },[state]);

  useEffect(() => {
    if(state.colors){
      let allPaletteName = state.colors.map(palette => {
        return palette.paletteName;
      });
      ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
        return !allPaletteName.some((name) => name.toLowerCase() === value.toLowerCase().trim());
      });
    }
  },[state]);

  useEffect(() => {
    if(id.length > 0){
      dispatch({type: 'UPDATE_PALETTE', colors: [...state.colors, {paletteName, id, emoji, colors}]});
      history.push('/');
    }
  },[id]);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const saveColor = () => {
    setColors([...colors, {name: colorName, color}]);
    setColorName('');
  };

  const clearPalette = () => {
    setColors([]);
    console.log(colors);
  };

  const savePaletteName = () => {
    setOpenPaletteNameDialog(false);
    setOpenEmojiDialog(true);
  };

  const addRandomColor = () => {
    let allColorsName = state.colors.flatMap(palette => {
      return palette.colors;
    });
    let continueLoop = true;
    while(continueLoop){
      let randomColor = allColorsName[Math.floor(Math.random() * allColorsName.length)];
      continueLoop = colors.some((color) => color.name === randomColor.name);
      if(!continueLoop){
        setColors([...colors, randomColor]);
      }
    }
  };

  const savePalette = (selectedEmoji) => {
    setOpenEmojiDialog(false);
    setEmoji(selectedEmoji.native);
    setId(paletteName.trim().toLowerCase().replace(/ /g, "-"));
  };

  return (
    <div className={classes.root}>
      <PaletteNameDialog
        openPaletteNameDialog={openPaletteNameDialog}
        setOpenPaletteNameDialog={setOpenPaletteNameDialog}
        paletteName={paletteName}
        setPaletteName={setPaletteName}
        savePaletteName={savePaletteName}
      />
      <EmojiDialog
        openEmojiDialog={openEmojiDialog}
        setOpenEmojiDialog={setOpenEmojiDialog}
        savePalette={savePalette}
      />
      <CreatePaletteDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        history={history}
        color={color}
        colors={colors}
        setColor={setColor}
        colorName={colorName}
        setColorName={setColorName}
        saveColor={saveColor}
        addRandomColor={addRandomColor}
        clearPalette={clearPalette}
        setOpenPaletteNameDialog={setOpenPaletteNameDialog}
      />
      <CreatePaletteContent open={open} colors={colors} setColors={setColors}/>
    </div>
  );
};

export default withStyles(styles, {withTheme: true})(CreatePaletteMain);