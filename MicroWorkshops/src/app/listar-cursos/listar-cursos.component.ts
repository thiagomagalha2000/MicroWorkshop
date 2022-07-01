import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
  providers : [DataserviceService],
  animations:[]
})

export class CursosComponent implements OnInit {

  listaDosCursos = [];

  constructor(private cursosService: DataserviceService){}

  ngOnInit(){
    this.listaDosCursos = this.cursosService.getDadosFilmes();
  }

  pesquisarCursoPeloNome(event: Event){
    this.listaDosCursos = [];
    var filterValueNome = (event.target as HTMLInputElement).value;
    if(filterValueNome!=""){
      var listaDosPesquisados = [];
      for (var i=0;i<=this.listaDosCursos.length+1;i++){
        if((this.cursosService.getDadosFilmeId(i+1).nome).includes(filterValueNome)){
          listaDosPesquisados.push(this.cursosService.getDadosFilmeId(i+1));
        }
      }
      this.listaDosCursos = listaDosPesquisados;
    }else{
      this.listaDosCursos = this.cursosService.getDadosFilmes();
    }
  }
}