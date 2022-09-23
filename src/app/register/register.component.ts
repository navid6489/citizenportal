import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IRegister } from 'src/app/iregister';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  un:FormControl = new FormControl("");
  pwd:FormControl = new FormControl("");
  name:FormControl = new FormControl("");
  role:FormControl = new FormControl("");
  dl:FormControl = new FormControl("0");
  dflag:FormControl = new FormControl("0");
  pf:FormControl = new FormControl("0");
  pt:FormControl = new FormControl("0");
  city:FormControl = new FormControl("");
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
   
  }
  save(){
    let user:IRegister = {
      un:this.un.value,
      pwd:this.pwd.value,
      name:this.name.value,
      role:this.role.value,
      dl:this.dl.value,
      dflag:this.dflag.value,
      pf:this.pf.value,
      pt:this.pt.value,
      city:this.city.value,
    };
    this.registerService.addUser(user);
    //this.toastr.success(`${food.foodName}`,'Food Item added Successfully!');


  }

}
