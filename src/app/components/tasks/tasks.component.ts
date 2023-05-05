import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.sortByTime(this.tasks);
    });
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      var x = this.tasks.filter((t) => {
        return t.id != task.id;
      });
      this.sortByTime(x);
    });
  }

  toggleReminder(task: Task) {
    this.taskService.toggleReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
      task.id = this.tasks.length + 1;
      this.tasks.push(task);
      this.sortByTime(this.tasks);
    });
  }

  sortByTime(tasks: Task[]) {
    tasks.sort((a: Task, b: Task) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
}
