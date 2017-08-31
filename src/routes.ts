import { Routes } from "@angular/router"
import { AppComponent } from './app/app.component';

export const appRoutes: Routes = [
  { path: "runs", component: AppComponent },
  { path: "", redirectTo: "/runs", pathMatch: 'full' }
]
