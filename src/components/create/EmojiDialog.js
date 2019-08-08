import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const EmojiDialog = ({openEmojiDialog, setOpenEmojiDialog, savePalette}) => {

  return (
    <div>
      <Dialog
        open={openEmojiDialog}
        onClose={() => setOpenEmojiDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Picker onSelect={(emoji) => savePalette(emoji)} />
      </Dialog>
    </div>
  );
};

export default EmojiDialog;