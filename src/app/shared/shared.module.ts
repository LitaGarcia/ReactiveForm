import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class SharedModule {}
