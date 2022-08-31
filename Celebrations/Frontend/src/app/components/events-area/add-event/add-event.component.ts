import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/models/event-model';
import { EventTypeModel } from 'src/app/models/event-type-model';
import { EventsService } from 'src/app/services/events-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public eventsTypes: EventTypeModel[] = [];
  public event = new EventModel();

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  async ngOnInit() {
    try {
      this.eventsTypes = await this.eventsService.getAllEventsTypes();
    }
    catch (err: any) {
      alert(err.message);
    }
  }

  public async send() {
    try {
      await this.eventsService.addNewEvent(this.event);
      alert("Event has been successfully added");
      this.router.navigateByUrl("/events");
    }
    catch (err: any) {
      alert(err.message);
    }
  }

}
