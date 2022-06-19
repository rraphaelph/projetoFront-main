
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormGroup,
          FormControl,
          Validators,
          FormBuilder,
          FormArray} from '@angular/forms';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  public user: User = new User();

  public formUser!: FormGroup;


  constructor( private formBuilder: FormBuilder, private rota: Router, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      nome: ['',
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(150),
              Validators.required
            ])
      ],
      usuario: ['',
      Validators.compose([
        Validators.minLength(2), Validators.required
      ])
    ],
      email: ['',
        Validators.compose([
          Validators.email, Validators.required
        ])
      ],
      senha: ['',
        Validators.compose([
          Validators.minLength(2),
          Validators.required
        ])
      ],
    });

  //  this.onLoadCheckboxStatus();
  }
  public cadastrar () {

    if (!this.formUser.pending && this.formUser.valid) {
      console.log('Os dados do usuário podem ser enviados!');

      this.userService.add(this.user).subscribe((resposta: any)=>{
        console.log(resposta);

        this.router.navigate(['/']);
      });

    } else {
      console.log('O formulário não está pronto!');
    }

  }

}
