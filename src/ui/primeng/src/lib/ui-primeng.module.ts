import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyInputModule } from '@ngx-formly/primeng/input';
import { FormlyTextAreaModule } from '@ngx-formly/primeng/textarea';
import { FormlyRadioModule } from '@ngx-formly/primeng/radio';
import { FormlyCheckboxModule } from '@ngx-formly/primeng/checkbox';
import { FormlySelectModule } from '@ngx-formly/primeng/select';
import { FormlyMultiSelectModule } from '@ngx-formly/primeng/multiselect';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyMultiSelectModule,
  ],
})
export class FormlyPrimeNGModule {}
