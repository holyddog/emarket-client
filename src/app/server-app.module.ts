import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FormsModule } from '@angular/forms';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { AppComponent } from './components/app.component';
import { AppModule } from './app.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { BrowserModule } from '@angular/platform-browser';

export function onBootstrap(appRef: ApplicationRef, transferState: TransferState) {
    return () => {
        appRef.isStable
            .filter(stable => stable)
            .first()
            .subscribe(() => {
                transferState.inject();
            });
    };
}

@NgModule({
    bootstrap: [AppComponent],
    providers: [
        {
            provide: APP_BOOTSTRAP_LISTENER,
            useFactory: onBootstrap,
            multi: true,
            deps: [
                ApplicationRef,
                TransferState
            ]
        }
    ],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        ServerModule,
        ServerTransferStateModule,
        AppModule,
        FormsModule
    ]
})
export class ServerAppModule {

}
