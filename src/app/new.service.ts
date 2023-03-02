import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, observable } from 'rxjs';
import { TitleStrategy } from '@angular/router';
import { Router } from '@angular/router';
import { fresher } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  submitted = new BehaviorSubject<boolean>(false)


  constructor(private http: HttpClient, private router: Router) { }
  newemployee(data: fresher ) {
    this.http.post('',
      data, { observe: 'response' }
    ).subscribe((result) => {
      this.submitted.next(true);
      localStorage.setItem('', JSON.stringify(result.body));
      // this.router.navigate(['']);
    })
  }
}
