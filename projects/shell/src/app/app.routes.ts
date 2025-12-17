import { Routes } from '@angular/router';
import { loadRemoteModule } from '@softarc/native-federation-runtime';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe',
    pathMatch: 'full',
  },
  {
    path: 'mfe',
    loadComponent: () =>
      loadRemoteModule('mfe', './Component').then((m) => m.App),
  }
];
