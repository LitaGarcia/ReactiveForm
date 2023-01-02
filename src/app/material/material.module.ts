import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  exports: [InputTextModule, CheckboxModule, DropdownModule, ButtonModule],
})
export class MaterialModule {}
