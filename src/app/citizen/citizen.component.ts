import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IRegister } from 'src/app/iregister';
import { RegisterService } from 'src/app/services/register.service';
import { Icomplaints } from '../icomplaints';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {
  finetf:FormControl = new FormControl("0");
  taxtf:FormControl = new FormControl("0");
  compta:FormControl = new FormControl("");
  userobj:any;
  
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
   this.registerService.getUser(localStorage.getItem("userid")).subscribe((res)=>{
    this.userobj=res;
    //console.log(this.userobj);
   })
  }
   pFine()
   {
    let user:IRegister = {
      un:"",
      pwd:"",
      name:"",
      role:"",
      dl:"",
      dflag:"",
      pf:this.finetf.value,
      pt:"",
      city:"",
    };
    this.registerService.payFine(user,localStorage.getItem("userid"))
   }
   tFine()
   {
    let user:IRegister = {
      un:"",
      pwd:"",
      name:"",
      role:"",
      dl:"",
      dflag:"",
      pf:"",
      pt:this.taxtf.value,
      city:"",
    };
    this.registerService.payTax(user,localStorage.getItem("userid"));
   }

   sendComplaint()
   {
    let comp:Icomplaints = {
      userid:Number(localStorage.getItem("userid")),
      complaint:this.compta.value
    };
    this.registerService.sendComplaint(comp);
   }
   ADL()
   {
    let user:IRegister = {
      un:"",
      pwd:"",
      name:"",
      role:"",
      dl:"",
      dflag:"1",
      pf:"",
      pt:"",
      city:"",
    };
    this.registerService.ADL(user,localStorage.getItem("userid"));
   }
}
