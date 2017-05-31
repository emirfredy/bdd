import { AddATodoItem } from './add-a-todo-item';
import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Open } from 'serenity-js/lib/screenplay-protractor';

export class Start implements Task {

    static withATodoListContaining(items: string[]) {       // static method to improve the readability
        return new Start(items);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {    // required by the Task interface
        return actor.attemptsTo(                            // delegates the work to lower-level tasks
            Open.browserOn('/examples/angularjs/'),
            ...this.addAll(this.items)
        );
    }

    constructor(private items: string[]) {                  // constructor assigning the list of items
    }                                                       // to a private field

    private addAll(items: string[]): Task[] {                   // transforms a list of item names
        return items.map(item => AddATodoItem.called(item));    // into a list of Tasks
    }
}
