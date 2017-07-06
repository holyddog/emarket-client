import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { AppModule } from './app.module';
import { FormsModule } from '@angular/forms';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';

@NgModule({
	bootstrap: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'my-app-id'
		}),
		BrowserTransferStateModule,
		AppModule,
        FormsModule
	]
})
export class BrowserAppModule { }
