import { Injectable } from '@angular/core';
import {AbstractSessionService} from '../entities/session/infrastructure/abstract-session-service';
import {Observable} from 'rxjs';
import {IToken} from '../entities/session/domain/IToken';
import {HttpClient} from '@angular/common/http';
import {TokenMapper} from '../entities/session/infrastructure/token-mapper';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends AbstractSessionService{

  BASE_URL: string;

  constructor(private httpClient: HttpClient, private mapper: TokenMapper) {super();}

  login(email: string, password: string): Observable<IToken> {
    return this.httpClient
      .post<IToken>(`${this.BASE_URL}/login`, {email: email, password: password})
      .pipe(map(this.mapper.mapTo));
  }

  register(email: string, password: string): Observable<IToken> {
    return this.httpClient
      .post<IToken>(`${this.BASE_URL}/register`, {email: email, password: password})
      .pipe(map(this.mapper.mapTo));
  }
}
