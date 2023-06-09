import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AreasPageComponent } from "./pages/areas-page/areas-page.component";
import { DestinatariosPageComponent } from "./pages/destinatarios-page/destinatarios-page.component";
import { PaqueteriasPageComponent } from "./pages/paqueterias-page/paqueterias-page.component";

const routes: Routes = [
  {
    path: 'areas',
    component: AreasPageComponent
  },
  {
    path: 'destinatarios',
    component: DestinatariosPageComponent
  },
  {
    path: 'paqueterias',
    component: PaqueteriasPageComponent
  },
  {
    path: '**',
    redirectTo: 'areas'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule {}
