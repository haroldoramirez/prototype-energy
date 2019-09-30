import { DatepickerComponent } from './../forms/datepicker/datepicker.component';
import { FormLayoutsComponent } from './../forms/form-layouts/form-layouts.component';
import { FormInputsComponent } from './../forms/form-inputs/form-inputs.component';
import { FormsComponent } from './../forms/forms.component';
import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { PasswordRoutingModule } from './password-routing.module';
import { CadastroPasswordComponent } from './cadastro-password/cadastro-password.component';
import { PasswordComponent } from './password.component';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    PasswordRoutingModule,
  ],
  declarations: [
    CadastroPasswordComponent,
    PasswordComponent,
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
  ],
})

export class PasswordModule { }
