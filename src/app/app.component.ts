import { Component, inject } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DAWII_CL3_Isaias_Capistrano';
  router:Router = inject(Router)

  constructor(){
    
  }

  pregunta1(){
    this.router.navigateByUrl("/pregUno")
  }

  pregunta2(){
    this.router.navigateByUrl("/pregDos")
  }
}
