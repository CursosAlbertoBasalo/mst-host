import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'remote-one',
    loadComponent: () => loadRemoteModule('mfe1', './Widget'),
  },
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './ROUTES_REMOTE_TWO').then((m) => m.routes),
  },
];
