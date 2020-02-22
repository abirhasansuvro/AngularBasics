import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  serverEnabled = false;
  serverStatus: string = "Server is not installed";
  serverName: string = "";
  serverAdded: boolean = false;
  servers: string[] = [];

  secretP: string = "Hams";
  buttonClicked: number = 0;
  logofEvent = [];

  constructor() {
    setTimeout(function() {
      this.serverEnabled = true;
    }, 2000);
  }

  ngOnInit() {}

  serverStatusChanger() {
    this.serverAdded = true;
    this.servers.push(this.serverName);
    this.serverStatus = "Server " + this.serverName + " Installed";
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  Togler() {
    this.buttonClicked++;
    if (this.buttonClicked % 2) this.secretP = "Tuna";
    else this.secretP = "Hams";
    this.logofEvent.push(new Date());
  }
  decideClass(num: number) {
    return {
      "before-5": num < 5,
      "after-5": num > 4
    };
  }
  setBackGround(num: number) {
    return num < 5 ? "white" : "blue";
  }
}
