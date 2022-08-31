import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dinamiccv7';
  jobForm!: FormGroup
  show:boolean=false
  // Form initialization
  constructor(private fBuilder: FormBuilder) {
    this.jobForm = this.fBuilder.group({
      jobs: this.fBuilder.array([])
    })
  }
  // getJobs() function returns the jobs array
  getjobs(): FormArray {
    return this.jobForm.get('jobs') as FormArray
  }
  // newJob() function returns new template that allows to add a new job
  newJob(): FormGroup {
    return this.fBuilder.group({
      yourFullName:'',
      Age:'',
      phoneNumber:'',
      email:'',
      companyName: '',
      companyWorkDescription: '',
      workExps: this.fBuilder.array([])
    })
  }
  // getWorkExps()function returns already added job index 
  getWorkExps(jobIndex: number): FormArray {
    return this.getjobs().at(jobIndex).get('workExps') as FormArray
  }
  //newWorkExp()   function returns new template that allows to add a new experience
  newWorkExp(): FormGroup {
    return this.fBuilder.group({
      position: '',
      startAt: '',
      endAt: ''
    })
  }
  // brings existing arrays from getJobs() and adds in newJobs
  addNewJob() {
    this.getjobs().push(this.newJob())
    this.show=true
  }
  // remove job funciton
  deleteJob(JobIndex:number){
    this.getjobs().removeAt(JobIndex)
    this.show=false
  }

  // add new experience
  addNewWorkExp(jobIndex:number){
    this.getWorkExps(jobIndex).push(this.newWorkExp())
  }
  // remove job experience
  deleteJobExp(jobIndex:number,expIndex:number){
    this.getWorkExps(jobIndex).removeAt(expIndex)
  }
  // button that prints final array
  onFormSubmit(){
    console.log(this.jobForm.value)
     
  }
}
