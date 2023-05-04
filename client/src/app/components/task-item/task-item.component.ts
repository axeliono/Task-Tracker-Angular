import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: 0,
    text: '',
    reminder: false,
    date: new Date(),
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  finalTime: string = '';
  faTimes = faTimes;

  ngOnInit(): void {
    var date = new Date(this.task.date);
    var time = date.toLocaleDateString();
    var day = date.toLocaleTimeString();
    this.finalTime = `${day} at ${time}`;
    console.log(this.finalTime);
  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onAdd(task: Task) {
    this.onAddTask.emit(task);
  }
}
