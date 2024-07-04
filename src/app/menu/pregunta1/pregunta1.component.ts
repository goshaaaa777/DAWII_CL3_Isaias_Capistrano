import { Component } from '@angular/core';
import { Pregunta1Service } from './pregunta1.service';
import { rick } from '../interfaces/pregunta.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {
  rick:rick[]=[]

  ngOnInit(): void {
    this.getallApiRick();
    
  }

  constructor(private pregunta1Service:Pregunta1Service){

  }

  getallApiRick(){
    this.pregunta1Service.getAllApiRick().subscribe(filtered => {
      this.rick = filtered;
      console.log(this.rick);
    });
  }

}
