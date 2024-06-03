import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Doctor } from '../model/doctor';
import { Appointment } from '../model/appointment';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {


  
  @Component({
    selector: 'app-doctor-appointment-list',
    templateUrl: './doctor-appointment-list.component.html',
    styleUrls: ['./doctor-appointment-list.component.css']
  })
    doctors: Doctor[] = [];
    appointments: Appointment[] = [];
  
    constructor(private mainService: MainService) { }
  
    ngOnInit(): void {
      this.fetchDoctors();
      this.fetchAppointments();
    }
  
    fetchDoctors() {
      this.mainService.get<Doctor[]>('doctors').subscribe(
        data => {
          this.doctors = data;
        },
        error => {
          console.error('Error fetching doctors:', error);
        }
      );
    }
  
    fetchAppointments() {
      this.mainService.get<Appointment[]>('appointments').subscribe(
        data => {
          this.appointments = data;
        },
        error => {
          console.error('Error fetching appointments:', error);
        }
      );
    }
  }
