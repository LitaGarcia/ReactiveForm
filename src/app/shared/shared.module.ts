import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [FormComponent, TableComponent],
  exports: [FormComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class SharedModule {}
