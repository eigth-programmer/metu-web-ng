import {AbstractSessionService} from '../infrastructure/abstract-session-service';

export function login(email: string, password: string, service: AbstractSessionService){
  return service.login(email, password);
}
