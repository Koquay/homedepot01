import { Types } from 'src/app/reducers/types'

const initialState = {
    user: {
        isLoggedIn: false
    },    
}

export const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case Types.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,                
            }

            case Types.LOGOUT_CURRENT_USER:
                    return {
                        ...state,
                        user: {isLoggedIn: false},                        
                    }

            default:
                return state;
    }
}
