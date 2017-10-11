import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));

    if(!token) {
      let match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
    }

    if(!token) {
      this.authorize();
    }
    else {
      localStorage.setItem('token', JSON.stringify(token));
      return token;
    }
  }

  authorize() {
    let client_id = "47463785bac64cb7bf053a862c0d7730";
    let response_type = "token";
    let redirect_uri = "http://localhost:4200/";

    let url = `https://accounts.spotify.com/authorize?`
    + `client_id=${client_id}`
    + `&response_type=${response_type}`
    + `&redirect_uri=${redirect_uri}`;
    
    window.location.replace(url);

    console.log("authorize");
  }

}
