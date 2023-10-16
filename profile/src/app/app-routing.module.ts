import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileeComponent } from './profilee/profilee.component';
import { FormmComponent } from './formm/formm.component';

const routes: Routes = [
  { path: '', component: FormmComponent },
  { path: 'formrouterlink', component: ProfileeComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./moduless/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: FormmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
