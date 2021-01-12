export interface ICurrentUser {
    username: string;
    userKind: string;
    displayName: string;
    roles: string[];
}
export declare class CurrentUser implements ICurrentUser {
    username: string;
    userKind: string;
    displayName: string;
    roles: string[];
    constructor(username: string, userKind: string, displayName: string);
    addRole(roleName: string): CurrentUser;
    hasRole(roleNames: string[]): boolean;
}
