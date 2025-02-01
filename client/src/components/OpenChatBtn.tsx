import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import '../styles/open-chat-btn.scss';

export const OpenChatBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="open-chat-btn">
        <MessageRoundedIcon
          className="chat-icon"
          onClick={() => setOpen(true)}
        />
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Room name Chat</DialogTitle>
        <DialogContent>
          here will be a list of the messages sent so far
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
