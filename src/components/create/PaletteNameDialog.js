import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const PaletteNameDialog = ({openPaletteNameDialog, setOpenPaletteNameDialog, savePaletteName, paletteName, setPaletteName}) => {

  return (
    <div>
      <Dialog open={openPaletteNameDialog} onClose={() => setOpenPaletteNameDialog(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your beautiful palette. Make sure it's unique!
          </DialogContentText>
        </DialogContent>
        <ValidatorForm
          onSubmit={savePaletteName}
          onError={errors => console.log(errors)}
        >
          <DialogContent>
            <TextValidator
              autoFocus
              fullWidth
              label="Color Name"
              value={paletteName}
              onChange={(e) => setPaletteName(e.target.value)}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['this field is required', 'name must be unique.']}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPaletteNameDialog(false)} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default PaletteNameDialog;