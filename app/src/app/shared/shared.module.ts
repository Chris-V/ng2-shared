import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SdkModule} from '@ng2-sdk/sdk';

@NgModule({
    exports: [
        SdkModule,
        FormsModule
    ]
})
export class SharedModule {
}
