import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


form!: FormGroup

  constructor(private service: PensamentoService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      conteudo: ['Digite uma ideia'],
      objetivo: ['Digite um objetivo'],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    alert('Nova ideia lançada!')
   this.service.criar(this.form.value).subscribe(() => {
    this.router.navigate(['/listarPensamentos'])
   })
  }
  cancelarPensamento() {
    alert("Ideia cancelada!")
    this.router.navigate(['/listarPensamentos'])
  }

}
