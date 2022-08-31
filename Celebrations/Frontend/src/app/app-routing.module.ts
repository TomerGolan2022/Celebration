import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/events-area/add-event/add-event.component';
import { EventListComponent } from './components/events-area/event-list/event-list.component';

const routes: Routes = [
    { path: "events", component: EventListComponent },
    { path: "events/new", component: AddEventComponent },
    { path: "", redirectTo: "events", pathMatch: "full" },
    { path: "**", redirectTo: "events" }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
