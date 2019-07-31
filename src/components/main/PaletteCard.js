import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../style/paletteCardStyle';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import ColorsContext from '../../context/colors-context';
import DeleteDialog from "./DeleteDialog";

const PaletteCard = ({paletteName, id, emoji, paletteColors, classes, history}) => {

  const [open, setOpen] = React.useState(false);
  const {colors, dispatch} = useContext(ColorsContext);

  function handleClickOpen(e) {
    e.stopPropagation();
    setOpen(true);
  }

  function handleClose(e) {
    e.stopPropagation();
    setOpen(false);
  }

  const deletePalette = (e) => {
    e.stopPropagation();
    let updatedColors = colors.filter(palette => palette.id !== id);
    dispatch({ type: 'DELETE_PALETTE', colors: updatedColors });
  };

  return (
    <div className={classes.paletteCard} onClick={() => history.push(`/palette/${id}`)}>
      <DeleteIcon className={classes.icon} onClick={handleClickOpen}/>
      <DeleteDialog open={open} handleClose={handleClose} deletePalette={deletePalette}/>
      <div className={classes.colors}>
        {paletteColors.map(({name, color}) => <div key={name} className={classes.color} style={{backgroundColor: color}}/>)}
      </div>
      <div className={classes.cardInfo}>
        <div>{paletteName}</div>
        <div>{emoji}</div>
      </div>
    </div>
  );
};

export default compose(
  withStyles(styles),
  withRouter
)(PaletteCard);
