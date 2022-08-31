import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EventListComponent } from './components/events-area/event-list/event-list.component';
import { EventCardComponent } from './components/events-area/event-card/event-card.component';
import { AddEventComponent } from './components/events-area/add-event/add-event.component';

@NgModule({
  declarations: [
    LayoutComponent,
    EventListComponent,
    EventCardComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
