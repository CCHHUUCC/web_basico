import { Routes } from '@angular/router';
import { Home } from './presentation/home/home';
import { Notfound } from './presentation/notfound/notfound';
import { About } from './presentation/about/about';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about', component:About},
    {path:'**', component:Notfound}
];