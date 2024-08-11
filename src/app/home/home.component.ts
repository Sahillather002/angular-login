import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../components/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'buyogo';
  solve8Logo = 'assets/images/solvei8.png';
  womenLogo = 'assets/images/woman.png';
  email: string = '';
  phone: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onCheckUser() {
    const emailOrPhone = this.email || this.phone;
    const username = this.email ? this.email.split('@')[0] : this.phone;
    this.authService.checkUserExists(emailOrPhone).subscribe(
      (userExists) => {
        if (userExists) {
          this.router.navigate(['/login'], {
            queryParams: {
              username: username,
            },
          });
        } else {
          console.log(userExists);
          this.router.navigate(['/signup']);
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    );
  }
}
