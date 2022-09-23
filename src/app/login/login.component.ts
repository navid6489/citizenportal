import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IRegister } from 'src/app/iregister';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lun:FormControl = new FormControl("");
  lpwd:FormControl = new FormControl("");
  data:any;
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  login(){
    let user:IRegister = {
      un:this.lun.value,
      pwd:this.lpwd.value,
      name:"",
      role:"",
      dl:"",
      dflag:"",
      pf:"",
      pt:"",
      city:"",
    };
    this.registerService.loginUser(user).subscribe((res)=>{this.data=res;console.log(this.data);
      localStorage.setItem('userid',this.data.id);
    if(res.role=="admin")
    {
      window.location.href="http://localhost:4200/admin"
    }
    else if(res.role=="citizen")
    {
      window.location.href="http://localhost:4200/citizen"
    }
    });
    
  }
}
