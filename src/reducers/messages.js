import {GETMESSAGES, GETMESSAGES_SUCCESS, POSTMESSAGE, POSTMESSAGE_SUCCESS} from "../actions"

const initialState = {
  list:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETMESSAGES:
      return state
    case GETMESSAGES_SUCCESS:
      return {...state,list:action.payload.messages}
    case POSTMESSAGE:
      return state
    case POSTMESSAGE_SUCCESS:
      return state
    default:
      return state;
  }
};
