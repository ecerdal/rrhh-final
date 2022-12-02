import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalAddComponent } from "./personal/personal-add/personal-add.component";
import { PersonalAdminComponent } from "./personal/personal-admin/personal-admin.component";
import { PersonalEditComponent } from "./personal/personal-edit/personal-edit.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { CargosAdminComponent } from "./cargos/cargos-admin/cargos-admin.component";
import { CargosAddComponent } from "./cargos/cargos-add/cargos-add.component";
import { CargosEditComponent } from "./cargos/cargos-edit/cargos-edit.component";
import { PensionesAdminComponent } from "./fondos/pensiones/pensiones-admin/pensiones-admin.component";
import { PensionesAddComponent } from "./fondos/pensiones/pensiones-add/pensiones-add.component";
import { PensionesEditComponent } from "./fondos/pensiones/pensiones-edit/pensiones-edit.component";
import { SaludAdminComponent } from "./fondos/salud/salud-admin/salud-admin.component";
import { SaludAddComponent } from "./fondos/salud/salud-add/salud-add.component";
import { SaludEditComponent } from "./fondos/salud/salud-edit/salud-edit.component";
import { LiquidacionesAdminComponent } from "./liquidaciones/liquidaciones-admin/liquidaciones-admin.component";
import { LiquidacionesAddComponent } from "./liquidaciones/liquidaciones-add/liquidaciones-add.component";
import { LiquidacionesEditComponent } from "./liquidaciones/liquidaciones-edit/liquidaciones-edit.component";

const rutas:Routes = [
    { path: '', component: DashboardComponent},

    { path: 'personal', component: PersonalAdminComponent},
    { path: 'personal/add', component: PersonalAddComponent},
    { path: 'personal/edit', component: PersonalEditComponent},

    { path: 'cargos', component: CargosAdminComponent},
    { path: 'cargos/add', component: CargosAddComponent},
    { path: 'cargos/edit', component: CargosEditComponent},

    { path: 'fondos/salud', component: SaludAdminComponent},
    { path: 'fondos/salud/add', component: SaludAddComponent},
    { path: 'fondos/salud/edit', component: SaludEditComponent},

    { path: 'fondos/pensiones', component: PensionesAdminComponent},
    { path: 'fondos/pensiones/add', component: PensionesAddComponent},
    { path: 'fondos/pensiones/edit', component: PensionesEditComponent},

    { path: 'liquidaciones', component: LiquidacionesAdminComponent},
    { path: 'liquidaciones/add', component: LiquidacionesAddComponent},
    { path: 'liquidaciones/edit', component: LiquidacionesEditComponent}
  ]
  
@NgModule({
    declarations: [
      DashboardComponent,

      PersonalAdminComponent,
      PersonalAddComponent,
      PersonalEditComponent,

      CargosAdminComponent,
      CargosAddComponent,
      CargosEditComponent,

      PensionesAdminComponent,
      PensionesAddComponent,
      PensionesEditComponent,

      SaludAdminComponent,
      SaludAddComponent,
      SaludEditComponent,

      LiquidacionesAdminComponent,
      LiquidacionesAddComponent,
      LiquidacionesEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
