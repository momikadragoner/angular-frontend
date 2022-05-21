import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newad',
  templateUrl: './newad.component.html',
  styleUrls: ['./newad.component.css']
})
export class NewadComponent implements OnInit {

  categories: any[] = [];
  message: string = "";

  formData = {
    kategoriaId: 3,
    leiras: '',
    hirdetesDatuma: new Date().toISOString().substring(0, 10),
    tehermentes: true,
    kepUrl: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.http.get<[any]>("http://localhost:5000/api/kategoriak").subscribe({
      next: (data: any[]) => this.categories = data,
      error: err => this.message = err.message
    })
  }

  kuldes() {
    console.log('asd');
    this.formData.kategoriaId = Number(this.formData.kategoriaId);
    this.http.post<any>('http://localhost:5000/api/ujingatlan', this.formData).subscribe({
      next: (data) => this.router.navigate(['offers']),
      error: (err) => this.message = err.message
    })
  }
}
