import { Injectable } from '@angular/core';
import {Task} from '../Task';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api_url="http://localhost:3000/tasks";

  getTasks():Observable<Task[]>{
    
   return this.http.get<Task[]>(this.api_url);
  }

  deleteTask(task:Task):Observable<Task>{
    const delete_url=`${this.api_url}/${task.id}`
    return this.http.delete<Task>(delete_url);
   }

  constructor(private http:HttpClient) { }
}
