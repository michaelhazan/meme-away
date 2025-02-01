import { FC } from 'react';

import { TextField } from '@mui/material';

export const EnterGame: FC = () => {
  return (
    <div>
      <h1>Enter Game</h1>
      <TextField label="Enter Name" variant="outlined" />
      <TextField label="Enter Room Code" variant="outlined" />
      <button onClick={() => console.log('Create room has been pressed')}>
        Create Room!
      </button>
      <button onClick={() => console.log('Join room has been pressed')}>
        Join Room!
      </button>
    </div>
  );
};
