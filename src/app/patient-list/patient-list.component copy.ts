import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';
import { Case } from '../model/case';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  cases: Case[] = [];
  appointments: any[] = [];
  patientId: number | null = null; // Variable to store the patient ID
  patientData: any; 
  constructor(private mainService: MainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Fetch patient ID from route parameters
    this.route.params.subscribe(params => {
      this.patientId = +params['id']; // Convert string to number
      // Fetch patient data and cases once patientId is available
      if (this.patientId) {
        this.fetchPatient(this.patientId);
        this.fetchCases(this.patientId);
      }
    });
  }

  fetchPatient(id: number): void {
    this.mainService.get<any>(`getP/${id}`).subscribe(response => {
      if (response.success) {
        this.patientData = response.data; 
        console.log(response)
        console.log(this.patientData); // Log patient data
      } else {
        console.error('Failed to fetch patient data:', response);
      }
    }, error => {
      console.error('Error fetching patient data:', error);
    });
  }
  
  fetchCases(patientId: number) {
    console.log(patientId, "Patient ID"); // Log the patient ID
    this.mainService.get<Case[]>(`getP/${patientId}/cases`).subscribe(data => {
      this.cases = data;
      console.log(data, "data hereeeeeeeeeeeeeeeeeeeeee"); // Log cases data
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
