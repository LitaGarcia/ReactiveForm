import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    TableModule,
  ],
})
export class MaterialModule {}
