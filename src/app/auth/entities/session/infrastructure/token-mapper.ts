export class TokenMapper {
  mapTo(params: any){
    const {msg, token, error} = params;

    return {
      msg: msg,
      token: token,
      error: error
    }
  }
}
