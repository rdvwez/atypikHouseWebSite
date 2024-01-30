import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisitorLayoutComponent} from './layout/layouts/visitor-layout/visitor-layout.component';
import {BlankLayoutComponent} from './layout/layouts/blank-layout/blank-layout.component';
import {AdminLayoutComponent} from './layout/layouts/admin-layout/admin-layout.component';
import {InitialDataResolver} from './initial-data.resolver';
import {DataAdminResolver} from './modules/admin/data-admin.resolver';
import {StandardUserLayoutComponent} from './layout/layouts/standard-user-layout/standard-user-layout.component';
import {OwnerDataResolver} from './modules/owner/owner-data.resolver';
import {AccessService} from './modules/auth/shared/service/access.service';
import {ClientDataResolver} from './modules/client/client-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: VisitorLayoutComponent,
    resolve: {
      initialData: InitialDataResolver
    },
    children: [
      {
        path: '', loadChildren: () => import('./modules/homes/homes.module').then(m => m.HomesModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/destinations/destinations.module').then(m => m.DestinationsModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('./modules/legaldocuments/legal-documents.module').then(m => m.LegalDocumentsModule)
      },
      {
        path: 'compagny',
        loadChildren: () => import('./modules/compagny-informations/compagny-informations.module').then(m => m.CompagnyInformationsModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./modules/inspirations/inspirations-routing.module').then(m => m.InspirationsRoutingModule)
      }
    ]
  },
  {
    path: 'auth',
    component: BlankLayoutComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Owner data
  {
    path: 'owner',
    component: StandardUserLayoutComponent,
    canActivate: [() => inject(AccessService).isOwner()],
    resolve: {
      navigationsData: OwnerDataResolver
    },
    children: [
      {
        path: 'value',
        loadChildren: () => import('./modules/owner/values/values.module').then(m => m.ValuesModule)
      },
      {
        path: 'house',
        loadChildren: () => import('./modules/owner/houses/owner-house.module').then(m => m.OwnerHouseModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./modules/owner/owner-account/owner-account.module').then(m => m.OwnerAccountModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./modules/owner/reservation/reservation.module').then(m => m.ReservationModule)
      }
    ]
  },
  // ConfigModule
  {
    path: 'admin',
    component: AdminLayoutComponent,
    resolve: {
      menuAdminData: DataAdminResolver
    },
    canActivate: [() => inject(AccessService).isAdmin()],
    children: [
      {
        path: 'category',
        loadChildren: () => import('./modules/admin/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'thematic',
        loadChildren: () => import('./modules/admin/thematic/thematic.module').then(m => m.ThematicModule)
      },
      {
        path: 'property',
        loadChildren: () => import('./modules/admin/property/property.module').then(m => m.PropertyModule)
      },
      {
        path: 'value',
        loadChildren: () => import('./modules/admin/value/value.module').then(m => m.ValueModule)
      },
      {
        path: 'house',
        loadChildren: () => import('./modules/admin/house/house.module').then(m => m.HouseModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/admin/users/users.module').then(m => m.UsersModule)
      }
    ],
  },
  {
    path: 'client',
    component: StandardUserLayoutComponent,
    canActivate: [() => inject(AccessService).isCustomer()],
    resolve: {
      navigationsData: ClientDataResolver
    },
    children: [
      {
        path: 'reservations',
        loadChildren: () => import('./modules/client/client-reservation/client-reservation.module').then(m => m.ClientReservationModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
