import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSampleComponent } from './contact-sample/contact-sample.component';

const routes: Routes = [
  { path: 'contact', component: ContactSampleComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
