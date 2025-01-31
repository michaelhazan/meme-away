import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import { StyledEngineProvider } from '@mui/material/styles';
import '../styles/open-chat-btn.scss';

/**
 * A provider that ensures that MUI's styling is overridden by custom CSS,
 * removing the need for `!important`.
 *
 * We highly recommend that you wrap your app with this provider,
 * to allow an easy override experience for both this package and MUI.
 *
 * @see further docs [here](https://hilma.atlassian.net/wiki/spaces/TD/pages/627998839/Forms+API+-+Generic+Components)
 */
const CSSPrioritize: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export const OpenChatBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <CSSPrioritize>
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
    </CSSPrioritize>
  );
};
