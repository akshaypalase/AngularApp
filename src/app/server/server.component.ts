import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: `server.component.html`,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    
    name: string = 'Codemind';
    serverid : number=37;
    serverstatus : string ='online';
    allowNewServer  = false;
    imgurl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';
    serverCreationStatus : string = "server not created";
    serverName : string ='codemind.com';
    getServerStatus() {
        return this.serverstatus;
    
      }
      onCreateServer(){
        this.serverCreationStatus ="server created";
      }
      constructor() { 
        setTimeout(()=> {
            this.allowNewServer = true
          }, 5000);
      }

   

}
