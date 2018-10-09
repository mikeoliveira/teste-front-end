import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes: RouterModule[] = [
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'prefix' }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule ,HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
