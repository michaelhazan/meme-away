import { FC, useState } from 'react';

import { CreateRoom } from '../components/CreateRoom';
import { JoinRoom } from '../components/JoinRoom';

enum EntranceEnum {
  JOIN = 'join',
  CREATE = 'create',
}

export const EnterGame: FC = () => {
  const [entrance, setEntrance] = useState<EntranceEnum>(EntranceEnum.JOIN);

  function handleChangeEntrance() {
    if (entrance === EntranceEnum.JOIN) {
      setEntrance(EntranceEnum.CREATE);
    } else {
      setEntrance(EntranceEnum.JOIN);
    }
  }

  return (
    <div>
      {entrance === EntranceEnum.JOIN ? (
        <JoinRoom handleChangeEntrance={handleChangeEntrance} />
      ) : (
        <CreateRoom handleChangeEntrance={handleChangeEntrance} />
      )}
    </div>
  );
};
