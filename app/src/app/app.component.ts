import {Component} from '@angular/core';
import {RandomService} from '@ng2-sdk/sdk';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    randomText: string;

    constructor(service: RandomService) {
        this.randomText = service.getLorem();
    }
}
