import { Injectable } from '@angular/core';
import { Rick } from '../interfaces/rick';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Details } from '../interfaces/datails/datails';

@Injectable({
  providedIn: 'root'
})
export class RickserviceService {

  url = environment.apiUrl;
 
  constructor(private http: HttpClient) { } 
  getAllEpisode(): Observable<Rick> {
    return this.http.get<Rick>(`${this.url}/episode`);
  }
  getDetails(id :number): Observable<Details>{
    return this.http.get<Details>(`${this.url}/character/${id}`);
  }

}
