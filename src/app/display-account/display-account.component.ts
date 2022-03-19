import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from '../Interface/account.interface';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {
@Input() accounts?:Account;
@Input() id!:number;
// @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
 

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id,status)
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }

}
