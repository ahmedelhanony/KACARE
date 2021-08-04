import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SandboxComponent} from './sandbox.component';
import {StcIconsComponent} from './stc-icons/stc-icons.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {ButtonsComponent} from './buttons/buttons.component';


const routes: Routes = [{
  path: '',
  // component: SandboxComponent,
  children: [
    { path: '', component: StcIconsComponent },
    { path: 'form-field', component: FormFieldComponent },
    { path: 'buttons', component: ButtonsComponent },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SandBoxRoutingModule {
}
