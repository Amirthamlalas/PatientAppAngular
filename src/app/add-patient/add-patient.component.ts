import { Component } from '@angular/core';

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

  readValue=()=>{
    let data:any={"name":this.name,"address":this.address,"phoneno":this.phoneno,"dateofAppoinment":this.dateofAppoinment}
    console.log(data)
  }

}
