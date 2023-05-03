import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({});
  day: Date = new Date();
  time: Date = new Date();
  bsValue = new Date();
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      text: new FormControl('', [Validators.required]),
      day: new FormControl('', [Validators.required]),
      time: new FormControl(new Date(), [Validators.required]),
      reminder: new FormControl(false),
    });
  }

  onValueChange(value: any): void {
    console.log(value);
  }

  onSubmit() {
    if (!this.taskForm.valid) {
      alert('Please correct the required fields');
      return;
    }

    var time = new Date(this.taskForm.controls['time'].value)
      .getTime()
      .toString();
    var day = new Date(this.taskForm.controls['day'].value).toDateString();

    const newTask = {
      text: this.taskForm.value.text.trim(),
      day: day,
      reminder: this.taskForm.value.reminder,
      time: time,
    };

    this.onAddTask.emit(newTask);

    this.taskForm.reset();
  }
}
