import { StateContext } from '@ngxs/store';
import { CurrentUserState } from '../models/CurrentUserState';
import { SetCurrentUser, LoginUser } from '../actions/current-user.actions';
import { UsersService } from '../services/users.service';
export declare class CurrentUserStateService {
    private usersSvc;
    constructor(usersSvc: UsersService);
    setCurrentUser(ctx: StateContext<CurrentUserState>, action: SetCurrentUser): void;
    clearCurrentUser(ctx: StateContext<CurrentUserState>): void;
    loginUser(ctx: StateContext<CurrentUserState>, action: LoginUser): import("rxjs").Observable<unknown>;
    logoutUser(ctx: StateContext<CurrentUserState>): void;
}
