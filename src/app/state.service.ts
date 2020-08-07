import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StateService {
  constructor(private http: HttpClient) {}

  private state$ = new Subject();
  private message$ = new Subject<any>();
  private clients: HTMLElement[] = [];

  public registerClient(client: HTMLElement) {
    this.clients.push(client);
  }

  public setState(state: any) {
    switch (state) {
      case 'init':
        for (const client of this.clients) {
          client.setAttribute('state', state);
        }
        break;
      case 'requestLineUp':
        this.clients
          .filter(elm => elm.nodeName === 'TEAM-ROOT')[0]
          .setAttribute('state', state);
        break;
        case 'sendInvite':
        this.clients
          .filter(elm => elm.nodeName === 'PLAYERS-ROOT')[0]
          .setAttribute('state', state);
        break;
      default:
        break;
    }
  }
  public getMessage(): Observable<any> {
    return this.message$.asObservable();
  }
  public setMessage(state: any) {
    this.message$.next(state);
  }
  public getPlayers(): Observable<any> {
    return this.http.get('assets/data/players.status.json');
  }
}
