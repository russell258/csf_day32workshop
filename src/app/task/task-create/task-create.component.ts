import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit{

  taskForm: FormGroup; //* Step 1

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.taskForm = this.fb.group({
    description: this.fb.control<string>(''),
    priority: this.fb.control<string>(''),
    due: this.fb.control<Date>(new Date())
  })
  }

}
