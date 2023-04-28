import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.component.html',
  styleUrls: ['./details-admin.component.css']
})
export class DetailsAdminComponent implements OnInit {
  user: User= new User();
  email!: string;
  logoData: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.userService.getUserById(+id)
      .subscribe(user => {
        this.user = user;
        this.getUserLogo();
      });
  }

  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/show']);
  }

  getUserLogo() {
    this.http.get(`http://localhost:8075/user/${this.user.email}/logo`, {responseType: 'blob'})
      .subscribe((data) => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.logoData = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        console.log('User deleted successfully!');
        this.router.navigateByUrl('admin/show');
      });
    }
  }

  banUser(email: string): void {
    this.userService.banUser(email).subscribe(
      data => {
        console.log(data);
      // Mettre à jour la liste des utilisateurs bannis
        this.ngOnInit();
      },
      error => console.log(error)
    );
  }

  unbanUser(email: string): void {
    this.userService.unbanUser(email).subscribe(
      data => {
        console.log(data);
// Mettre à jour la liste des utilisateurs bannis
        this.ngOnInit();
      },
      error => console.log(error)
    );
  }


}
