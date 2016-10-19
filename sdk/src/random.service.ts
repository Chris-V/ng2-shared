import {Injectable} from '@angular/core';

@Injectable()
export class RandomService {
    getLorem(): string {
        return 'Lorem Ipsum';
    }
}
