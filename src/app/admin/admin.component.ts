import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IRegister } from 'src/app/iregister';
import { RegisterService } from 'src/app/services/register.service';
import { Icomplaints } from '../icomplaints';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
userApplications:any;
userFT:any;
userComp: any;
dl:FormControl = new FormControl("");
finetf:FormControl = new FormControl("");
taxtf:FormControl = new FormControl("");
comps:any;
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  
    this.registerService.getUserApp().subscribe((res:any)=>{
      this.userApplications=res;
      //console.log(this.userobj);
      
     })
     this.registerService.getAllUser().subscribe((res:any)=>{
      this.userFT=res;
      //console.log(this.userobj);
      
     })

     this.registerService.getAllComp().subscribe((res:any)=>{
      this.comps=res;
      //console.log(this.userobj);
      
     })
  }

 dlApprove(userid:any)
  {
   let user:IRegister = {
     un:"",
     pwd:"",
     name:"",
     role:"",
     dl:this.dl.value,
     dflag:"2",
     pf:"",
     pt:"",
     city:"",
   };
   this.registerService.dlApprove(userid,user)
  }
addFine(userid:any)
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
  this.registerService.addFine(user,userid)
}

addTax(userid:any)
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
  this.registerService.addTax(user,userid)
}
  deleteComp(compid:any)
  {
    this.registerService.deleteComp(compid);
  }
}
