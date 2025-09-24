import { Component, OnInit } from '@angular/core';
import { CatigoryServiesService } from '../../../../../core/services/catigory-servies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catigories-list',
  templateUrl: './catigories-list.component.html',
  styleUrl: './catigories-list.component.scss'
})
export class CatigoriesListComponent implements OnInit{
  catigories:any;
  constructor(private CatigoryServiesService:CatigoryServiesService) {};

  ngOnInit(): void {
    this.getAllCatigories();
  }

  getAllCatigories() {
    this.CatigoryServiesService.getCatigories().subscribe(
      (res)=> {
        this.catigories = res.catigories;
      },(Error)=> {
        console.log(Error);
      }
    )
  }
}
