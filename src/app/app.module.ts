import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataTransferService } from '../app/services/data-transfer.service'
import { MediaService } from './services/media.service';



//Firebase
import { environment } from '../environments/environment';


//Angular Material Modules
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MovieInfoComponent } from './info/info.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MatDialogModule } from '@angular/material/dialog';


const appRoutes: Routes = [
  { path: 'imagine', component: MovieInfoComponent},
  { path: '', redirectTo: '/imagine', pathMatch: 'full'}


];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MovieInfoComponent,
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
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatChipsModule,
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [DataTransferService, MediaService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
