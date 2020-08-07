import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private state$ = new Subject<any>();
  private acknowledgeInvite$ = new Subject<any>();
  data = new EventEmitter();
  constructor(private http: HttpClient) {}
  public getState(): Observable<any> {
    return this.state$.asObservable();
  }
  public setState(state: string) {
    this.state$.next(state);
  }
  public acknowledgeInvite(acknowledgement: any) {
    this.data.emit(acknowledgement);
  }
  public getInvite(): Observable<any> {
    return this.acknowledgeInvite$.asObservable();
  }
  public setInvite(state: any) {
    this.acknowledgeInvite$.next(state);
  }

  public getPlayers(): Observable<any> {
    return this.http.get('assets/data/players.data.json');
  }
}
