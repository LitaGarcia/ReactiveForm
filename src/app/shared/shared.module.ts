import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  exports: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
