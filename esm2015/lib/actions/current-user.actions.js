export class SetCurrentUser {
    constructor(currentUser) {
        this.currentUser = currentUser;
    }
}
SetCurrentUser.type = '[User] Set Current User';
export class ClearCurrentUser {
}
ClearCurrentUser.type = '[User] Clear Current User';
export class LoginUser {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
LoginUser.type = '[User] Login User';
export class LogoutUser {
}
LogoutUser.type = '[User] Logout User';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLmFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvdXNlci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvY3VycmVudC11c2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBbUIsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFBSSxDQUFDOztBQURqQyxtQkFBSSxHQUFHLHlCQUF5QixDQUFDO0FBSW5ELE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ1gscUJBQUksR0FBRywyQkFBMkIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sU0FBUztJQUVwQixZQUFtQixRQUFnQixFQUFTLFFBQWdCO1FBQXpDLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUksQ0FBQzs7QUFEakQsY0FBSSxHQUFHLG1CQUFtQixDQUFDO0FBSTdDLE1BQU0sT0FBTyxVQUFVOztBQUNMLGVBQUksR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9DdXJyZW50VXNlcic7XG5cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50VXNlciB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tVc2VyXSBTZXQgQ3VycmVudCBVc2VyJztcbiAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnRVc2VyOiBJQ3VycmVudFVzZXIpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDdXJyZW50VXNlciB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tVc2VyXSBDbGVhciBDdXJyZW50IFVzZXInO1xufVxuXG5leHBvcnQgY2xhc3MgTG9naW5Vc2VyIHtcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW1VzZXJdIExvZ2luIFVzZXInO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcm5hbWU6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9nb3V0VXNlciB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tVc2VyXSBMb2dvdXQgVXNlcic7XG59Il19