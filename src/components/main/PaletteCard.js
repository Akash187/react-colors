import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../style/paletteCardStyle';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const PaletteCard = ({paletteName, id, emoji, colors, classes, history}) => {
  return (
    <div className={classes.paletteCard} onClick={() => history.push(`/palette/${id}`)}>
      <DeleteIcon className={classes.icon} />
      <div className={classes.colors}>
        {colors.map(({name, color}) => <div key={name} className={classes.color} style={{backgroundColor: color}}/>)}
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
