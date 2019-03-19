import {SETCURRENTUSER} from "../actions/users"

const initialState = {
  currentUsername: '',
  currentDisplayName: '',
  currentAbout: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SETCURRENTUSER:
    return { ...state, 
      currentUsername: action.payload.username,
      currentDisplayName: action.payload.displayName,
      currentAbout:action.payload.about,
    };
    default:
      return state;
  }
};
