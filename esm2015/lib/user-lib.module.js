import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CurrentUserStateService } from './services/current-user-state.service';
export const NgxsFeatureModule = NgxsModule.forFeature([CurrentUserStateService]);
export class UserLibModule {
}
UserLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MatListModule,
                    MatToolbarModule,
                    MatSidenavModule,
                    MatButtonModule,
                    MatIconModule,
                    MatCardModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatMenuModule,
                    MatTableModule,
                    MatSnackBarModule,
                    NgxsFeatureModule,
                ],
                exports: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3VzZXItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91c2VyLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFekMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDL0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFaEYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQWlDbEYsTUFBTSxPQUFPLGFBQWE7OztZQS9CekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJ1xuXG5pbXBvcnQgeyBOZ3hzTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkLWZvcm0vY2hhbmdlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbnRVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1cnJlbnQtdXNlci9jdXJyZW50LXVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jdXJyZW50LXVzZXItc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBOZ3hzRmVhdHVyZU1vZHVsZSA9IE5neHNNb2R1bGUuZm9yRmVhdHVyZShbQ3VycmVudFVzZXJTdGF0ZVNlcnZpY2VdKTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhbmdlUGFzc3dvcmRGb3JtQ29tcG9uZW50LFxuICAgIEN1cnJlbnRVc2VyQ29tcG9uZW50LFxuICAgIExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICBVc2VyUHJvZmlsZUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBOZ3hzRmVhdHVyZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoYW5nZVBhc3N3b3JkRm9ybUNvbXBvbmVudCxcbiAgICBDdXJyZW50VXNlckNvbXBvbmVudCxcbiAgICBMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgVXNlclByb2ZpbGVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMaWJNb2R1bGUgeyB9XG4iXX0=