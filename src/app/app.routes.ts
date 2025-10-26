import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"backlog", loadChildren: ()=> import('./features/backlog/backlog-module').then(m=>m.BacklogModule)},
    {path:"", pathMatch:"full", redirectTo:"backlog"}
];
