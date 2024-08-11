import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../components/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  step: number = 1;
  name: string = '';
  emailOrPhone: string = '';
  password: string = '';
  organization: string = '';
  designation: string = '';
  birthDate: string = '';
  city: string = '';
  pincode: string = '';
  signupComplete: boolean = false;
  organizationError: boolean = false;
  solve8Logo = 'assets/images/solvei8.png';
  womenLogo = 'assets/images/woman.png';
  greenTick = 'assets/images/greenTick.png';
  leftIcon = 'assets/images/left.png';
  designations = ['Developer', 'Manager', 'Designer']; // Mock designations

  constructor(private authService: AuthService, private router: Router) {}

  onContinue() {
    this.step = 2;
  }

  onBack() {
    this.step = 1;
  }

  onSignup() {
    if (!this.isOrganizationValid(this.organization)) {
      this.organizationError = true;
      return;
    }
    this.signupComplete = true;
  }

  isOrganizationValid(orgName: string): boolean {
    return ['Org1', 'Org2', 'Org3'].includes(orgName); // Mock validation
  }
}
