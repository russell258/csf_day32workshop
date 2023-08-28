import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit{

  taskForm: FormGroup; //* Step 1
  taskArray: any[]=[];

  lowPriority:string="Low";

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.taskForm = this.fb.group({
    description: this.fb.control<string>('',[Validators.required, Validators.minLength(5)]),
    priority: this.fb.control<string>(this.lowPriority,[Validators.required]),
    due: this.fb.control<Date>(new Date(),[Validators.required])
  })
  }

  addForm(){
    console.log('addForm: '+JSON.stringify(this.taskForm.value))
    this.taskArray.push(this.taskForm.value)
  }

}
