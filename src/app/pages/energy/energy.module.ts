import { DatepickerComponent } from './../forms/datepicker/datepicker.component';
import { FormLayoutsComponent } from './../forms/form-layouts/form-layouts.component';
import { FormInputsComponent } from './../forms/form-inputs/form-inputs.component';
import { FormsComponent } from './../forms/forms.component';
import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../forms/buttons/buttons.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EnergyRoutingModule } from './energy-routing.module';
import { EnergyComponent } from './energy.component';

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
    EnergyRoutingModule,
  ],
  declarations: [
    CadastroComponent,
    EnergyComponent,
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
  ],
})

export class EnergyModule { }
