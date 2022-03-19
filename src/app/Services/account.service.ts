import { EventEmitter, Injectable } from "@angular/core"
import { LoggingService } from "./logging.service"
@Injectable()

export class AccountService{
    acounts=[{
        name:'account1',
        type:'Master'
      }]

constructor(private loggingService:LoggingService){}

statusUpdated= new EventEmitter<string>()

    addAccount(name:string, type:string){
        this.acounts.push({name:name, type:type})
        this.loggingService.logStatusChange(type)
        
    }

    updateAccount(id:number, newType:string){
        this.acounts[id].type= newType
        this.loggingService.logStatusChange(newType)
    }
      
}