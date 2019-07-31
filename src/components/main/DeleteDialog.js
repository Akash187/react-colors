import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon  from '@material-ui/icons/Clear';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  delete: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  cancel: {
    backgroundColor: red[100],
    color: red[600],
  }
});

const DeleteDialog = ({open, handleClose, deletePalette}) => {
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} TransitionComponent={Transition}>
      <DialogTitle id="simple-dialog-title">Delete this Palette?</DialogTitle>
      <List>
        <ListItem button onClick={deletePalette} key={0}>
          <ListItemAvatar>
            <Avatar className={classes.delete}>
              <DoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={'Delete'} />
        </ListItem>
        <ListItem button onClick={handleClose}>
          <ListItemAvatar>
            <Avatar className={classes.cancel}>
              <ClearIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={'Cancel'} />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DeleteDialog;