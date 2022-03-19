import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Account } from '../Interface/account.interface';
import { LoggingService } from '../Services/logging.service';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  //providers:[LoggingService]
})
export class AddAccountComponent implements OnInit {
@ViewChild('name') nameinput?:ElementRef
@ViewChild('type') accounttype?:ElementRef


// @Output()  addAcc =new EventEmitter<{name:string, type:string}>()
  constructor( private loggingservice:LoggingService, private accountService:AccountService) { }
  addAccount(accountname:string,accounttype:string){
  this.accountService.statusUpdated.subscribe(value=>{
    alert('New Status' + value)
  })
this.accountService.addAccount(accountname,accounttype)
// this.loggingservice.logStatusChange(accounttype)


  // this.addAcc.emit({
    //   name:accountname,
    //   type:accounttype
    
    // })
// console.log("Creates a new account of type :"+ accounttype)
  }
  ngOnInit(): void {
  }

}
