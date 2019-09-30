import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPasswordComponent } from './cadastro-password/cadastro-password.component';
import { PasswordComponent } from './password.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordComponent,
    children: [
      {
        path: 'cadastro-password',
        component: CadastroPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class PasswordRoutingModule {
}
