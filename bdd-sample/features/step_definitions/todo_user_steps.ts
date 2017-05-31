import { AddATodoItem } from './../../spec/screenplay/tasks/add-a-todo-item';
import { Start } from './../../spec/screenplay/tasks/start';
import { listOf } from './../../spec/text';
import { Actor } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
import { protractor } from 'protractor/built';

// import { expect } from '../../spec/expect';
import { TodoList } from '../../spec/screenplay/components/todo_list';

module.exports = function() {

    this.setDefaultTimeout(60 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    let actor: Actor;

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function(name: string, items: string) {
        console.log('name: ' + name) ;

        actor = Actor.named(name)
        .whoCan(BrowseTheWeb.using(protractor.browser));

        return actor.attemptsTo(
            Start.withATodoListContaining(listOf(items)));
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function(itemName: string) {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        );
    });

    this.Then(/^.* todo list should contain (.*?)$/, (items: string) => {
        // return expect(actor.toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf(items));
    });

};
