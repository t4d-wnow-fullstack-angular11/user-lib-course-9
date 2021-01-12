import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { State, Action } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { SetCurrentUser, ClearCurrentUser, LoginUser, LogoutUser } from '../actions/current-user.actions';
import { UsersService } from '../services/users.service';
import { SetErrorMessage, ClearErrorMessage } from '@t4d-wnow/shared-lib';
import * as i0 from "@angular/core";
import * as i1 from "./users.service";
let CurrentUserStateService = class CurrentUserStateService {
    constructor(usersSvc) {
        this.usersSvc = usersSvc;
    }
    setCurrentUser(ctx, action) {
        ctx.patchState(action.currentUser);
    }
    clearCurrentUser(ctx) {
        ctx.patchState({
            username: '',
            userKind: '',
            displayName: '',
            roles: [],
        });
    }
    loginUser(ctx, action) {
        return this.usersSvc.loginEmployee(action.username, action.password).pipe(tap(() => {
            const currentUser = this.usersSvc.getCurrentUser();
            if (currentUser) {
                ctx.dispatch([
                    new SetCurrentUser(currentUser),
                    new ClearErrorMessage(),
                ]);
            }
            else {
                ctx.dispatch([
                    new ClearCurrentUser(),
                    new SetErrorMessage('Unable to retrieve current user.'),
                ]);
            }
        }), catchError((err) => {
            if (err.status === 404) {
                ctx.dispatch([
                    new ClearCurrentUser(),
                    new SetErrorMessage('Username and password not found.'),
                ]);
            }
            else {
                ctx.dispatch([
                    new ClearCurrentUser(),
                    new SetErrorMessage('Unknown login error.'),
                ]);
            }
            return err;
        }));
    }
    logoutUser(ctx) {
        ctx.dispatch([
            new ClearCurrentUser(),
            new ClearErrorMessage(),
        ]);
    }
};
CurrentUserStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrentUserStateService_Factory() { return new CurrentUserStateService(i0.ɵɵinject(i1.UsersService)); }, token: CurrentUserStateService, providedIn: "root" });
CurrentUserStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CurrentUserStateService.ctorParameters = () => [
    { type: UsersService }
];
__decorate([
    Action(SetCurrentUser)
], CurrentUserStateService.prototype, "setCurrentUser", null);
__decorate([
    Action(ClearCurrentUser)
], CurrentUserStateService.prototype, "clearCurrentUser", null);
__decorate([
    Action(LoginUser)
], CurrentUserStateService.prototype, "loginUser", null);
__decorate([
    Action(LogoutUser)
], CurrentUserStateService.prototype, "logoutUser", null);
CurrentUserStateService = __decorate([
    State({
        name: 'currentUser',
        defaults: {
            username: '',
            userKind: '',
            displayName: '',
            roles: [],
        },
    })
], CurrentUserStateService);
export { CurrentUserStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvdXNlci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2N1cnJlbnQtdXNlci1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztJQWM3RCx1QkFBdUIsU0FBdkIsdUJBQXVCO0lBRWxDLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7SUFBSSxDQUFDO0lBRy9DLGNBQWMsQ0FBQyxHQUFtQyxFQUFFLE1BQXNCO1FBQ3hFLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxnQkFBZ0IsQ0FBQyxHQUFtQztRQUNsRCxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2IsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQWM7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFNBQVMsQ0FBQyxHQUFtQyxFQUFFLE1BQWlCO1FBRTlELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixHQUFHLENBQUMsUUFBUSxDQUFDO29CQUNYLElBQUksY0FBYyxDQUFDLFdBQVcsQ0FBQztvQkFDL0IsSUFBSSxpQkFBaUIsRUFBRTtpQkFDeEIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFDWCxJQUFJLGdCQUFnQixFQUFFO29CQUN0QixJQUFJLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDeEQsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDO29CQUNYLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3RCLElBQUksZUFBZSxDQUFDLGtDQUFrQyxDQUFDO2lCQUN4RCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUNYLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3RCLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDO2lCQUM1QyxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFHRCxVQUFVLENBQUMsR0FBbUM7UUFDNUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNYLElBQUksZ0JBQWdCLEVBQUU7WUFDdEIsSUFBSSxpQkFBaUIsRUFBRTtTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUYsQ0FBQTs7O1lBakVBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZlEsWUFBWTs7QUFxQm5CO0lBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs2REFHdEI7QUFHRDtJQURDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzsrREFReEI7QUFHRDtJQURDLE1BQU0sQ0FBQyxTQUFTLENBQUM7d0RBaUNqQjtBQUdEO0lBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzt5REFNbEI7QUE1RFUsdUJBQXVCO0lBWm5DLEtBQUssQ0FBbUI7UUFDdkIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQWM7U0FDdEI7S0FDRixDQUFDO0dBSVcsdUJBQXVCLENBOERuQztTQTlEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0ZSwgQWN0aW9uLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvQ3VycmVudFVzZXJTdGF0ZSc7XG5pbXBvcnQgeyBTZXRDdXJyZW50VXNlciwgQ2xlYXJDdXJyZW50VXNlciwgTG9naW5Vc2VyLCBMb2dvdXRVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9jdXJyZW50LXVzZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2V0RXJyb3JNZXNzYWdlLCBDbGVhckVycm9yTWVzc2FnZSB9IGZyb20gJ0B0NGQtd25vdy9zaGFyZWQtbGliJztcblxuQFN0YXRlPEN1cnJlbnRVc2VyU3RhdGU+KHtcbiAgbmFtZTogJ2N1cnJlbnRVc2VyJyxcbiAgZGVmYXVsdHM6IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgdXNlcktpbmQ6ICcnLFxuICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICByb2xlczogW10gYXMgc3RyaW5nW10sXG4gIH0sXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFVzZXJTdGF0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlcnNTdmM6IFVzZXJzU2VydmljZSkgeyB9XG5cbiAgQEFjdGlvbihTZXRDdXJyZW50VXNlcilcbiAgc2V0Q3VycmVudFVzZXIoY3R4OiBTdGF0ZUNvbnRleHQ8Q3VycmVudFVzZXJTdGF0ZT4sIGFjdGlvbjogU2V0Q3VycmVudFVzZXIpIHtcbiAgICBjdHgucGF0Y2hTdGF0ZShhY3Rpb24uY3VycmVudFVzZXIpO1xuICB9XG5cbiAgQEFjdGlvbihDbGVhckN1cnJlbnRVc2VyKVxuICBjbGVhckN1cnJlbnRVc2VyKGN0eDogU3RhdGVDb250ZXh0PEN1cnJlbnRVc2VyU3RhdGU+KSB7XG4gICAgY3R4LnBhdGNoU3RhdGUoe1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgdXNlcktpbmQ6ICcnLFxuICAgICAgZGlzcGxheU5hbWU6ICcnLFxuICAgICAgcm9sZXM6IFtdIGFzIHN0cmluZ1tdLFxuICAgIH0pO1xuICB9XG5cbiAgQEFjdGlvbihMb2dpblVzZXIpXG4gIGxvZ2luVXNlcihjdHg6IFN0YXRlQ29udGV4dDxDdXJyZW50VXNlclN0YXRlPiwgYWN0aW9uOiBMb2dpblVzZXIpIHtcblxuICAgIHJldHVybiB0aGlzLnVzZXJzU3ZjLmxvZ2luRW1wbG95ZWUoYWN0aW9uLnVzZXJuYW1lLCBhY3Rpb24ucGFzc3dvcmQpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHRoaXMudXNlcnNTdmMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgY3R4LmRpc3BhdGNoKFtcbiAgICAgICAgICAgIG5ldyBTZXRDdXJyZW50VXNlcihjdXJyZW50VXNlciksXG4gICAgICAgICAgICBuZXcgQ2xlYXJFcnJvck1lc3NhZ2UoKSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZGlzcGF0Y2goW1xuICAgICAgICAgICAgbmV3IENsZWFyQ3VycmVudFVzZXIoKSxcbiAgICAgICAgICAgIG5ldyBTZXRFcnJvck1lc3NhZ2UoJ1VuYWJsZSB0byByZXRyaWV2ZSBjdXJyZW50IHVzZXIuJyksXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgIGN0eC5kaXNwYXRjaChbXG4gICAgICAgICAgICBuZXcgQ2xlYXJDdXJyZW50VXNlcigpLFxuICAgICAgICAgICAgbmV3IFNldEVycm9yTWVzc2FnZSgnVXNlcm5hbWUgYW5kIHBhc3N3b3JkIG5vdCBmb3VuZC4nKSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZGlzcGF0Y2goW1xuICAgICAgICAgICAgbmV3IENsZWFyQ3VycmVudFVzZXIoKSxcbiAgICAgICAgICAgIG5ldyBTZXRFcnJvck1lc3NhZ2UoJ1Vua25vd24gbG9naW4gZXJyb3IuJyksXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAQWN0aW9uKExvZ291dFVzZXIpXG4gIGxvZ291dFVzZXIoY3R4OiBTdGF0ZUNvbnRleHQ8Q3VycmVudFVzZXJTdGF0ZT4pIHtcbiAgICBjdHguZGlzcGF0Y2goW1xuICAgICAgbmV3IENsZWFyQ3VycmVudFVzZXIoKSxcbiAgICAgIG5ldyBDbGVhckVycm9yTWVzc2FnZSgpLFxuICAgIF0pO1xuICB9XG5cbn1cbiJdfQ==