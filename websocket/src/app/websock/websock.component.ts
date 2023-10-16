import { Component, OnDestroy } from '@angular/core';
import { WebsockServiceService } from '../websock-service.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
// import * as SockJs from 'sockjs-client';
import { chatMessage } from '../models/chatMessage.model';

@Component({
  selector: 'app-websock',
  templateUrl: './websock.component.html',
  styleUrls: ['./websock.component.css']
})
export class WebsockComponent implements OnDestroy {
private messageSubscription:Subscription;

chatmessage?:chatMessage;
chat?:chatMessage;
messages:any;
form=new FormGroup({
  namee:new FormControl('')
})
formm=new FormGroup({
  nameee:new FormControl('')
})

// messages=[];

  constructor(private websocketService:WebsockServiceService){
    this.messageSubscription=this.websocketService.onMessage()
    .subscribe((message)=>{console.log('Received message:',message);
    // this.messages.push(message);
    this.messages=message.sort((a:any,b:any)=>(a.id-b.id));
    console.log('field messages',this.messages);
    // console.log(new Date())
  })
  }
// id=1;
onSend(){
  this.chatmessage=new chatMessage();
  // this.chatmessage.id=this.id;
  // this.id++;
  this.chatmessage.messageId='vinoth';
  this.chatmessage.sender=null;
  this.chatmessage.content=this.form.value.namee;
  this.chatmessage.timeStamp=new Date();


console.log(this.chatmessage);

  this.websocketService.sendMessage(/*this.form.value.namee*/ this.chatmessage);
  console.log("web socket finished");
  
  console.log(this.form.value.namee);
  this.form.get('namee')?.reset();
  // this.form.reset();

}

update(message:any){
  console.log("updatemessage",message);
  
  this.chat=new chatMessage();
  this.chat.id=message.id;
  this.chat.messageId=message.messageId;
  this.chat.sender=message.sender;
  this.chat.content=this.formm.value.nameee;
  this.chat.timeStamp=message.timeStamp;
  console.log("message-Id       ",message.id);
  this.websocketService.sendMessage(message.id);
  
  this.websocketService.sendMessage(this.chat);
  this.formm.get('nameee')?.reset();
}

delete(message:any){

  console.log("updatemessage",message);
  
  this.chat=new chatMessage();
  this.chat.id=message.id;
  console.log("message-Id       ",message.id);
  this.websocketService.sendMessage(message.id);
}



ngOnDestroy(): void {
  this.messageSubscription.unsubscribe();
}



}
