import { Component,inject, OnInit } from '@angular/core';
import { RickserviceService } from '../services/rickservice.service';
import { Rick } from '../interfaces/rick';
import { CommonModule } from '@angular/common';
import { Result } from '../interfaces/result';
import { Details } from '../interfaces/datails/datails';

@Component({
  selector: 'app-rickmorty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rickmorty.component.html',
  styleUrl: './rickmorty.component.css'
})
export class RickmortyComponent implements OnInit{
  public Observable?: Result[]; 
  public DetailsObservable?: Details; 
  constructor(private rickserviceService:RickserviceService ) {
     
  } 

  ngOnInit(){
    this.callApi();  
  }
  async callApi(){
     this.rickserviceService.getAllEpisode().subscribe((data)=>{ 
      this.Observable=data.results;
    });
    this.details();
  }
  async details(){
    this.rickserviceService.getDetails(1).subscribe((data)=>{ 
      this.DetailsObservable=data;
      console.log(this.DetailsObservable);
    });
  }
}
