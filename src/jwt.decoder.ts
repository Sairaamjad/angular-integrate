import { Injectable } from '@angular/core';
import  {jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtDecoder {
  constructor() {}

  decodeToken(token: string): any {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded,"decoded token here")
      return decoded;
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }
}
