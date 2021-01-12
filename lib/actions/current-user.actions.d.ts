import { ICurrentUser } from '../models/CurrentUser';
export declare class SetCurrentUser {
    currentUser: ICurrentUser;
    static readonly type = "[User] Set Current User";
    constructor(currentUser: ICurrentUser);
}
export declare class ClearCurrentUser {
    static readonly type = "[User] Clear Current User";
}
export declare class LoginUser {
    username: string;
    password: string;
    static readonly type = "[User] Login User";
    constructor(username: string, password: string);
}
export declare class LogoutUser {
    static readonly type = "[User] Logout User";
}
