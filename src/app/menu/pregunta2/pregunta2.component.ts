import { Component } from '@angular/core';
import { Foto } from '../interfaces/pregunta.interface';
import { Pregunta2Service } from './pregunta2.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  foto:Foto[]=[]

  ngOnInit(): void {
    this.getallApiFoto();
    
  }

  constructor(private pregunta1Service:Pregunta2Service){

  }

  getallApiFoto(){
    this.pregunta1Service.getAllApiFoto().subscribe(filtered => {
      this.foto = filtered;
      console.log(this.foto);
    });
  }

}
