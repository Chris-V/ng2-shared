import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {SdkModule} from '@ng2-sdk/sdk';
import {SharedModule} from './shared';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        SdkModule.forRoot(),
        BrowserModule,
        SharedModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
