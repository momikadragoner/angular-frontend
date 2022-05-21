import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IngatlanService } from '../services/ingatlan.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  displayedColumns: string[] = ['kategoriaNev', 'leiras', 'hirdetesDatuma', 'tehermentes', 'kepUrl'];
  dataSource: any[] = [];

  constructor(private ingatlanService: IngatlanService) {
    this.ingatlanService.getAll().subscribe({
      next: data => { this.dataSource = [...data]; }
    })
  }

  ngOnInit(): void {
  }

}
