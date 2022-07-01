import { Injectable } from "@angular/core";
import { DadosCursos } from "./DadosCursos";

@Injectable()
export class DataserviceService {
    getDadosFilmes(){
        return [
          new DadosCursos(
            1,
            "Mercado de TI",
            "/assets/Davi_Freitas.jpg",
            "zSuytXtS3Sk?t=3028",
            "10/11/2021",
            "Davi Freitas"),
          new DadosCursos(
            2,
            "Saúde Digital",
            "/assets/Fabio_Jose.jpg",
            "qDcApRQEEJs?t=5011",
            "10/11/2021",
            "Fábio José"),
          new DadosCursos(
            3,
            "Desvendando OSS e ALSA",
            "/assets/Nicolas_Araujo.jpg",
            "qDcApRQEEJs?t=866",
            "10/11/2021",
            "Nicolas Araujo"),
          new DadosCursos(
            4,
            "Mercado de TI e oportunidades no E-commerce",
            "/assets/Aldo_Pacheco.jpg",
            "qDcApRQEEJs?t=866",
            "10/11/2021",
            "Aldo Pacheco"),
          new DadosCursos(
            5,
            "Softwares Livres para estudantes",
            "/assets/Lucas_Filho.jpg",
            "qDcApRQEEJs?t=866",
            "10/11/2021",
            "Lucas Filho"),
          new DadosCursos(
            6,
            "Aprendendo a usar o Overleaf",
            "/assets/Walber_Florencio.jpg",
            "qDcApRQEEJs?t=866",
            "11/11/2021",
            "Walber Florêncio"),
          new DadosCursos(
            7,
            "Iniciando no desenvolvimento web com Python + Django",
            "/assets/Edenilson_Ferreira.jpg",
            "qDcApRQEEJs?t=866",
            "11/11/2021",
            "Edenilson Ferreira"),
          new DadosCursos(
            8,
            "Como impulsionar sua carreira na TI com comunidades e ambientes Open Source",
            "/assets/Vaneska_Sousa.jpg",
            "qDcApRQEEJs?t=866",
            "11/11/2021",
            "Vaneska Sousa"),
          new DadosCursos(
            9,
            "TinyML: IoT usando Machine Learning",
            "/assets/Filipe_de_Almeida.jpg",
            "qDcApRQEEJs?t=866",
            "11/11/2021",
            "Filipe Lira"),
          new DadosCursos(
            10,
            "Single-Board Computers e tecnologias Open Source",
            "/assets/Jose_Vieira.jpg",
            "qDcApRQEEJs?t=866",
            "11/11/2021",
            "José Vieira da Costa"),
          new DadosCursos(
            11,
            "Uma jornada de aplicações em containers até a nuvem",
            "/assets/Diego_Voltz.jpg",
            "qDcApRQEEJs?t=866",
            "12/11/2021",
            "Diego Voltz"),
          new DadosCursos(
            12,
            "IaC: Infraestrutura como código: O lado Ops de DevOps",
            "/assets/Julio_Damasceno.jpg",
            "qDcApRQEEJs?t=866",
            "12/11/2021",
            "Júlio Damasceno"),
          new DadosCursos(
            13,
            "Engenharia Social",
            "/assets/Marcelo_Silva.jpg",
            "qDcApRQEEJs?t=866",
            "12/11/2021",
            "Marcelo Silva"),
          ]
    }

    getDadosFilmeId(id: number){
        return this.getDadosFilmes()[id-1];
    }
    constructor(){}
}