import { SET_ROOM_ID } from '../types';

const initialState = {
  roomID: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_ID:
      return {
        ...state,
        roomID: action.payload.id,
      };
    default:
      return state;
  }
};
