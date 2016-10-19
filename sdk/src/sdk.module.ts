import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RandomService} from './random.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ],
    providers: [],
    declarations: []
})
export class SdkModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SdkModule,
            providers: [
                RandomService
            ]
        };
    }
}
