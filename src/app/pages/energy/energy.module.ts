import { DatepickerComponent } from './../forms/datepicker/datepicker.component';
import { FormLayoutsComponent } from './../forms/form-layouts/form-layouts.component';
import { FormInputsComponent } from './../forms/form-inputs/form-inputs.component';
import { FormsComponent } from './../forms/forms.component';
import { FormsRoutingModule } from './../forms/forms-routing.module';
import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ButtonsComponent } from '../forms/buttons/buttons.component';

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
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    CadastroComponent,
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
  ],
})

export class EnergyModule { }
