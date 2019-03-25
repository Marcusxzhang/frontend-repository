import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.title }}</li>
    </ul>
    `
})

export class AppComponent {
    todos: any[];

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
        this.httpClient.get('https://jsonplaceholder.typicode.com/todos/')subscribe((data: any[]) => {
            this.todos = data;
        });
    }
}