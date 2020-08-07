import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private state$ = new Subject<any>();
  constructor() {}
  public getState(): Observable<any> {
    return this.state$.asObservable();
  }
  public setState(state: string) {
    this.state$.next(state);
  }
}
