import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
   {path: '', component : OffreComponent},
  { path: "offre", component: OffreComponent },
  { path: "user", component: UserComponent },
  { path: "role", component: RoleComponent },
   {path:"**", redirectTo :"offre"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
