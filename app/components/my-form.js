import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import { helper } from '@ember/component/helper';

export default class MyFormComponent extends Component {
    @tracked name = "";

   
    @action
    update(event) {
        this.name = event.target.value;
        
    }
}

