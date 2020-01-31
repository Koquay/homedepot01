import { Action } from "@ngrx/store";

export enum UserActionTypes {
    SET_CURRENT_USER = "SET_CURRENT_USER",
    LOG_OUT_USER = "LOG_OUT_USER",
}

export class SetCurrentUserAction implements Action {
    type: UserActionTypes.SET_CURRENT_USER;

    constructor(
        public user: {},
        type
    ) {
        this.type = type;        
    }
}

export class LogoutUserAction implements Action {
    type: UserActionTypes.LOG_OUT_USER;

    constructor(
        type
    ) {
        this.type = type;        
    }
}

export type UserActionUnion = SetCurrentUserAction | LogoutUserAction;