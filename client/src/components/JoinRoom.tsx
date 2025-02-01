import { FC } from 'react';

interface JoinRoomProps {
  handleChangeEntrance: VoidFunction;
}

export const JoinRoom: FC<JoinRoomProps> = ({ handleChangeEntrance }) => {
  return (
    <div>
      <h1>Enter Game</h1>
      <button onClick={handleChangeEntrance}>Create Room Instead</button>
    </div>
  );
};
