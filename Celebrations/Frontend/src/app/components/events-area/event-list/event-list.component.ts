import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event-model';
import { EventTypeModel } from 'src/app/models/event-type-model';
import { EventsService } from 'src/app/services/events-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public eventsTypes: EventTypeModel[] = [];
  public events: EventModel[] = [];

  constructor(private eventsService: EventsService) { }

  async ngOnInit() {
    try {
      this.eventsTypes = await this.eventsService.getAllEventsTypes();
    }
    catch (err: any) {
      alert(err.message);
    }
  }

  public async display(args: Event) {
    try {
      const select: HTMLSelectElement = args.target as HTMLSelectElement;
      const typeId = select.value;
      this.events = await this.eventsService.getEventsByType(typeId);
    }
    catch (err: any) {
      alert(err.message);
    }
  }

  public async deleteGift(_id: string) {
    try {
      const ok = window.confirm("Are you sure to delete?");
      if (!ok) return;
      await this.eventsService.deleteEvent(_id);
      alert("Event has been successfully deleted");
      const indexToDelete = this.events.findIndex(e => e._id === _id);
      this.events.splice(indexToDelete, 1);
    }
    catch (err: any) {
      alert(err.message);
    }
  }

}
