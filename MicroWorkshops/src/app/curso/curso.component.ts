import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DadosCursos } from '../DadosCursos';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers : [DataserviceService]
})
export class CursoComponent implements OnInit {

  curso: DadosCursos;
  safeSrc: SafeResourceUrl;
  @ViewChild("videoElement") videoElement!: ElementRef;

  constructor(private route: ActivatedRoute, private cursosService: DataserviceService, private sanitizer: DomSanitizer){}

  ngOnInit(): void{
    this.getCurso(this.route.snapshot.params['id']);
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.curso.video);
  }

  getCurso(id: number){
    this.curso = this.cursosService.getDadosFilmeId(id);
  }
}