import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register-livreur-admin',
  templateUrl: './register-livreur-admin.component.html',
  styleUrls: ['./register-livreur-admin.component.css']
})
export class RegisterLivreurAdminComponent implements OnInit{
  ngOnInit(): void {
  }
  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN', 'MODERATOR', 'BUYER','VENDOR','PROVIDER','LIVREUR'];

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.registerRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
      },
      error => {
        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );
  }
}
