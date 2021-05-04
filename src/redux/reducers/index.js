import { combineReducers } from 'redux';
import ChannelReducer from '../reducers/ChannelReducer';

const rootReducer = combineReducers({
  rooms: ChannelReducer,
});

export default rootReducer;
