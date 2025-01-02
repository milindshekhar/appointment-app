import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
appointments:Appointment[] = [];
newAppointmentTitle:string="";
newAppointmentDate:Date=new Date();
ngOnInit(): void {
    console.log("Got loaded");
    let savedAppointments=localStorage.getItem('appointments');
    this.appointments=savedAppointments?JSON.parse(savedAppointments):[];

}
addAppointment()
{
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
 {
  let newAppoint:Appointment={
    id:Date.now(),
    title:this.newAppointmentTitle,
    date:this.newAppointmentDate

  }
  this.appointments.push(newAppoint);
  this.newAppointmentTitle="";
  this.newAppointmentDate=new Date();
  localStorage.setItem('appointments',JSON.stringify(this.appointments));

 }
}
deleteAppointment(index:number)
{
  this.appointments.splice(index,1);
  localStorage.setItem('appointments',JSON.stringify(this.appointments));
}

}
