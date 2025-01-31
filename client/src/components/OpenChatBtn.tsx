import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import '../styles/open-chat-btn.scss';

export const OpenChatBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="open-chat-btn">
        <img
          src="/chat-icon.svg"
          alt="Open group chat"
          onClick={() => setOpen(true)}
        />
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Room name Chat</DialogTitle>
        <DialogContent>
          here will be a list of the messages send so far
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
