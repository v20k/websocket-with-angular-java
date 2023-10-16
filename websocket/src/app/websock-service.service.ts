import { Injectable } from '@angular/core';
import{webSocket,WebSocketSubject} from 'rxjs/webSocket';
// import {Client} from '@stomp/stompjs' ;

@Injectable({
  providedIn: 'root'
})
export class WebsockServiceService {

private socket:WebSocketSubject<any>;

  constructor() { 
    this.socket=webSocket('ws://localhost:8080/websocket-endpoint');
  }
public sendMessage(message:any):void{
  this.socket.next(message);
}

public onMessage(){
  return this.socket;
}

}
