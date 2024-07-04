import { Routes } from '@angular/router';
import { Pregunta1Component } from './menu/pregunta1/pregunta1.component';
import { Pregunta2Component } from './menu/pregunta2/pregunta2.component';

export const routes: Routes = [
    {
        path:"pregUno",component:Pregunta1Component
    },
    {
        path:"preguDos",component:Pregunta2Component

    }
];
