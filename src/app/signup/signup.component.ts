import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../components/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SignupComponent implements OnInit {
  emailOrPhone: string = '';
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  solve8Logo = 'assets/images/solvei8.png';
  womenLogo = 'assets/images/woman.png';
  greenTick = 'assets/images/greenTick.png';
  loginSuccess: boolean = false;
  loginError: boolean = false;

  // Inject ActivatedRoute in the constructor
  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to query parameters to get the username
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'User';
      this.emailOrPhone = params['emailOrPhone'] || '';
    });
  }

  onLogin() {
    this.authService.validatePassword(this.emailOrPhone, this.password).subscribe(isValid => {
      if (isValid) {
        // Set loginSuccess to true after a delay
        setTimeout(() => {
          this.loginSuccess = true;
        }, 1000); // 1-second delay
      } else {
        this.errorMessage = 'Invalid password';
        this.loginError = true;
      }
    });
  }
}
