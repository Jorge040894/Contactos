import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  per:Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) { }


  ngOnInit() {
  }






  Guardar (name, apellidos, numero)
  { this.per.name = name;
    this.per.apellidos = apellidos;
    this.per.numero = numero;
    this.service.createPersona(this.per)
    .subscribe(data => {
      alert("Se agrego con Exito..");
      this.router.navigate(["listar"]);
    });
  }
}
