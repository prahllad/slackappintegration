
import { Component,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import * as io from 'socket.io-client';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })
export class AppComponent implements OnInit {
  socket: any;
  newmsg: any;

  ngOnInit() {
    const box = document.getElementById('message');
    box.scrollTop = box.scrollHeight;
   }
   constructor(private http: Http) {

   }
  startbot() {
    document.getElementById('chatlog').innerHTML = '';
    this.socket = io('localhost:3000');
    this.socket.on('message', function(data){
      if ( !data.end) {
    console.log(data);
    const p = document.createElement('h2');
    p.innerText = data.text;
    const li = document.createElement('li');
    li.appendChild(p);
    document.getElementById('chatlog').appendChild(li);
      } else {
        document.getElementById('chatlog').innerHTML = '';
       const p = document.createElement('h1');
       p.innerText = data.end;

       document.getElementById('chatlog').appendChild(p);

      }
       const box = document.getElementById('message');
    box.scrollTop = box.scrollHeight;

    });
   /** this.appservice.start(obj).subscribe((data)=>{
      this.newmsg = data.text;
      console.log(this.newmsg);
      this.attachmessage();
    });*/


  }
  send(val: string) {
    const p = document.createElement('h2');
    p.innerText = val;
    document.getElementById('chatlog').appendChild(p);
    this.socket.emit('msg',val);
     const box = document.getElementById('message');
    box.scrollTop = box.scrollHeight;

  }
  loadslack() {
  window.open('https://slack.com/oauth/authorize?client_id=162645215077.162547360307&scope=incoming-webhook&redirect_uri=http://localhost:4200/');
  }

}
