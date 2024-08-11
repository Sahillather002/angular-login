import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Organization } from '../models/organization.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkUserExists(emailOrPhone: string): Observable<boolean> {
    // Load mock data and check if user exists
    return this.http.get<User[]>('assets/mocks/mock-users.json').pipe(
      map(users => users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone))
    );
  }

  validatePassword(emailOrPhone: string, password: string): Observable<boolean> {
    // Load mock data and validate password
    return this.http.get<User[]>('assets/mocks/mock-users.json').pipe(
      map(users => users.some(user => (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password))
    );
  }

  getOrganizations(): Observable<Organization[]> {
    // Load mock data for organizations
    return this.http.get<Organization[]>('assets/mocks/mock-organizations.json');
  }
}
