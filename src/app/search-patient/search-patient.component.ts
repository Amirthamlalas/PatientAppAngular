import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {

  name=""
  search:any=[]
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"name":this.name}
    this.api.searchPatient(data).subscribe(

      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid input")
          
        } else {
         this.search=response;
        }
      }
    )
  }

}
