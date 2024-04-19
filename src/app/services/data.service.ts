import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ExpInterface } from '../interfaces/experience.interface';
import { ProjectInterface } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = "https://portfolio.mzwwwa.co.za/";

  constructor(private http: HttpClient) { }

  getExperience(): Observable<ExpInterface[]> {
    return this.http.get<ExpInterface[]>(this.baseURL + 'experience');
  }

  getProjects(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.baseURL + 'projects');
  }
}
