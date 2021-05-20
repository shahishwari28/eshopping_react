import {UserActionTypes} from './user.types';

const INTIAL_STATE = {
    currentUser: null 
}

const userReducer = (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER :
            return{
                ...state,
                currentUser:action.playload
            }
        default:
            return state;
    }
}

export default userReducer;