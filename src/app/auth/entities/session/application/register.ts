import {AbstractSessionService} from '../infrastructure/abstract-session-service';

export function register(nickName: string, email: string, password: string, service: AbstractSessionService){
  return service.register(email, password);
}
