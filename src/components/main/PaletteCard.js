import React, { useContext, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../style/paletteCardStyle';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import ColorsContext from '../../context/colors-context';
import DeleteDialog from "./DeleteDialog";
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const PaletteCard = ({paletteName, id, emoji, paletteColors, classes, history}) => {

  const [open, setOpen] = useState(false);
  const {state, dispatch} = useContext(ColorsContext);
  const [inProp, setInProp] = useState(true);

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
    setInProp(false);
    setTimeout(() => {
      let updatedColors = state.colors.filter(palette => palette.id !== id);
      dispatch({ type: 'DELETE_PALETTE', colors: updatedColors });
    }, 300);
  };

  return (
    <Transition in={inProp} timeout={duration} unmountOnExit={true}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
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
        </div>
      )}
    </Transition>
  );
};

export default withStyles(styles)(withRouter(PaletteCard));
