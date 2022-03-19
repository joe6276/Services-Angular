import { Component, OnInit } from '@angular/core';
import { Account } from '../Interface/account.interface';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  //providers:[AccountService]
})
export class AccountsComponent implements OnInit {
acounts:{name:string, type:string}[]=[]
  constructor(private accountService:AccountService) {}

  ngOnInit(): void {
   this.acounts=this.accountService.acounts
  }
  // receiveAccount(eventdata:{name:string,type:string}){

  //   this.acounts.push(eventdata)

  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.acounts[updateInfo.id].type = updateInfo.newStatus;
  // }
}
