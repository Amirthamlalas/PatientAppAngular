import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  name=""
  address=""
  phoneno=""
  dateofAppoinment=""
  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"name":this.name,"address":this.address,"phoneno":this.phoneno,"dateofAppoinment":this.dateofAppoinment}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Patient added successfully")
          
        } else {
          alert("something went wrong")
          
        }

      }
    )
  }

}
