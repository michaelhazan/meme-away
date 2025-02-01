import { FC } from 'react';

interface CreateRoomProps {
  handleChangeEntrance: VoidFunction;
}

export const CreateRoom: FC<CreateRoomProps> = ({ handleChangeEntrance }) => {
  return (
    <div>
      <h1>Create a Room</h1>
      <button onClick={handleChangeEntrance}>Join a Room Instead</button>
    </div>
  );
};
