import { SET_ROOM_ID } from '../types';

export const enterRoom = (id) => {
  return {
    type: SET_ROOM_ID,
    payload: {
      id: id,
    },
  };
};
