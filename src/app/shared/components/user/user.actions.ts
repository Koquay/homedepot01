import { Action } from "@ngrx/store";

export enum UserActionTypes {
    SET_CURRENT_USER = "SET_CURRENT_USER",
    LOG_OUT_USER = "LOG_OUT_USER",
}

export class SetCurrentUserAction implements Action {
    readonly type = UserActionTypes.SET_CURRENT_USER;

    constructor(
        public user: {}
    ) {}
}

export class LogoutUserAction implements Action {
    readonly type = UserActionTypes.LOG_OUT_USER;

    constructor() {}
}

export type UserActionUnion = SetCurrentUserAction | LogoutUserAction;