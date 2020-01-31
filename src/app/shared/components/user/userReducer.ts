import { Types } from 'src/app/reducers/types'
import { UserActionTypes } from './user.actions'

const initialState = {
    user: {
        isLoggedIn: false
    },    
}

export const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: action.user,                
            }

            case UserActionTypes.LOG_OUT_USER:
                    return {
                        ...state,
                        user: {isLoggedIn: false},                        
                    }

            default:
                return state;
    }
}
