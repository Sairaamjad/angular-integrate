import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  cases: any[] = [];
  appointments: any[] = [];

  constructor(private mainService: MainService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.fetchCases();
    this.fetchAppointments();
    this.fetchPatient();
  }

  fetchPatient(): void {
    const id= this.route.snapshot.paramMap.get('data.id');

    this.mainService.get<any>(`getP/${id}`).subscribe(response => {
      if (response) {
        console.log(response)
      } else {
        console.error('Failed to fetch patient data:', response);
      }
    }, error => {
      console.error('Error fetching patient data:', error);
    });
  }
  fetchCases() {
    const patientId = this.route.snapshot.paramMap.get('id');
    console.log(patientId,"patttttttttttttttttttttttttttttttttt")
    this.mainService.get<any[]>(`getP/${patientId}/cases`).subscribe(data => {
      this.cases = data;
    });
  }

  fetchAppointments() {
    // Replace 'your-appointments-api-url' with the actual URL of your appointments API endpoint
    this.mainService.get<any[]>('your-appointments-api-url').subscribe(data => {
      this.appointments = data;
    });
  }

  // Methods to handle edit and delete actions for cases
  editCase(id: any) {
    // Implement edit case logic here
  }

  deleteCase(id: any) {
    // Implement delete case logic here
  }

  // Methods to handle edit and delete actions for appointments
  editAppointment(id: any) {
    // Implement edit appointment logic here
  }

  deleteAppointment(id: any) {
    // Implement delete appointment logic here
  }
}
