import React, {useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ColorsContext from '../../context/colors-context';

const Alert = () => {

  const {state, dispatch} = useContext(ColorsContext);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type: 'UPDATE_SHOW_ALERT', showAlert: !state.showAlert});
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={state.showAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{state.alertMessage}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default Alert;