import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router'; import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTransferService } from '../app/services/data-transfer.service'
import { MediaService } from './services/media.service';
import { HttpClientModule } from '@angular/common/http';



//Firebase
import { environment } from '../environments/environment';


//Angular Material Modules
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InfoComponent } from './info/info.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountInfoComponent } from './account-info/account-info.component';


const appRoutes: Routes = [
  { path: 'imagine', component: InfoComponent },
  { path: '', redirectTo: '/imagine', pathMatch: 'full' }


];

enableProdMode();



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    InfoComponent,
    AccountInfoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // ,{ enableTracing: true }
    ),
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [DataTransferService, MediaService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
