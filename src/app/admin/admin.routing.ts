import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/user-details', pathMatch: 'full' },
      { path: "user-details", component: UserDetailsComponent },
      { path: "driver-details", component: DriverDetailsComponent },
      { path: "ride-details", component: RideDetailsComponent }
    ]
  }];

export const AdminRouting: ModuleWithProviders = RouterModule.forRoot(adminRoutes);