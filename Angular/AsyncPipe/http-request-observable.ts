import { Observable } from 'rxjs';

export class AppComponent {

    todos$: Observable<any[]>;

    constructor(private httpClient: HttpClient) { }

    ngOnInt() {
        this.todos$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos/');
    }

}