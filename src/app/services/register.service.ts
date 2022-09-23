import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { IRegister } from 'src/app/iregister';
import { catchError, Observable, throwError } from 'rxjs';
import { Icomplaints } from '../icomplaints';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  errorMessage: any;
  userobj:any;
  constructor(private httpClient :HttpClient) { }
  private handleError(error: HttpErrorResponse) 
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

//CITIZEN METHODS


  addUser(user : IRegister){
    this.httpClient.post<IRegister>("http://localhost:18958/api/Users",user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => alert("Data entered in Database Successfully !"));
  }

  loginUser(user : IRegister){
   return this.httpClient.post<IRegister>("http://localhost:18958/api/Users/Login",user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    })
  }

   getUser(id:any): Observable<any>{
   
    
    return this.httpClient.get<IRegister>("http://localhost:18958/api/Users"+"/"+id, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
    
  }

  payFine(user:IRegister,userid:any){
    this.httpClient.put<IRegister>("http://localhost:18958/api/Users/PayFine"+"/"+userid,user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => {
      
      alert("Fine Paid Successfully !")});
      setTimeout(function(){
        window.location.reload();
     }, 3000);
  }

  payTax(user:IRegister,userid:any){
    this.httpClient.put<IRegister>("http://localhost:18958/api/Users/PayTax"+"/"+userid,user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => {
      
      alert("Tax Paid Successfully !")});
      setTimeout(function(){
        window.location.reload();
     }, 3000);
  }
    ADL(user:IRegister,userid:any)
    {
      this.httpClient.put<IRegister>("http://localhost:18958/api/Users/ADL"+"/"+userid,user, {
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      }).subscribe(result => {
        
        alert("Applied For Driving Liscence Successfully !")});
        setTimeout(function(){
          window.location.reload();
       }, 3000);
    }

  sendComplaint(comp:Icomplaints)
  {
    this.httpClient.post<Icomplaints>("http://localhost:18958/api/Users/SendComplaint",comp, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => alert("Complaint sent Successfully !"));
  }


  //ADMIN METHODS
  getUserApp(): Observable<any>{
   
    
    return this.httpClient.get<IRegister>("http://localhost:18958/api/Users/GetUserApp", {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
    
  }
  dlApprove(userid:any,user:any)
  {
    this.httpClient.put<IRegister>("http://localhost:18958/api/Users/DLApprove"+"/"+userid,user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => {
      
      alert("Driving Liscence Approved Successfully !")});
      setTimeout(function(){
        window.location.reload();
     }, 3000);
  }

  getAllUser(): Observable<any>{
   
    
    return this.httpClient.get<IRegister>("http://localhost:18958/api/Users/GetAllUser", {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
    
  }

  addFine(user:IRegister,userid:any){
    this.httpClient.put<IRegister>("http://localhost:18958/api/Users/AddFine"+"/"+userid,user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => {
      
      alert("Fine Added Successfully !")});
      setTimeout(function(){
        window.location.reload();
     }, 3000);
  }

  addTax(user:IRegister,userid:any){
    this.httpClient.put<IRegister>("http://localhost:18958/api/Users/AddTax"+"/"+userid,user, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => {
      
      alert("Tax Added Successfully !")});
      setTimeout(function(){
        window.location.reload();
     }, 3000);
  }

  getAllComp(): Observable<any>{
   
    
    return this.httpClient.get<Icomplaints>("http://localhost:18958/api/Users/GetAllComp", {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
    
  }
  deleteComp(compid:any)
  {
    this.httpClient.delete<Icomplaints>("http://localhost:18958/api/Users/DeleteComp"+"/"+compid, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => {
      
      alert("Complaint Deleted Successfully !")});
      setTimeout(function(){
        window.location.reload();
     }, 3000);
  }

}
